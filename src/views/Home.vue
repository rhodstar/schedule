<template>
  <v-container fluid>
    <!-- Message snackbar component -->
    <v-snackbar v-model="snackbar">
      {{ message }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <!-- Floating button -->
    <v-btn
      absolute
      fixed
      dark
      fab
      bottom
      right
      color="blue"
      class="mb-10 d-print-none"
      @click="dialog = true"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <!-- Dialog for floating button -->
    <v-dialog v-model="dialog" width="900px">
      <v-card>
        <v-card-title>
          <v-spacer></v-spacer>
          <v-btn color="blue" text @click="dialog = false">Cerrar</v-btn>
          <v-tabs v-model="dialogTab">
            <v-tab>Materias FI</v-tab>
            <v-tab>Otras actividades</v-tab>
          </v-tabs>
        </v-card-title>
        <v-card-text v-if="dialogTab === 0">
          <div>
            <v-text-field
              label="Clave de la materia"
              required
              class="d-inline-flex mr-2"
              v-model="tfclave"
              v-on:keyup.enter="buscarMateria"
            ></v-text-field>
            <v-btn
              outlined
              rounded
              color="primary"
              class="d-inline-flex"
              @click="buscarMateria"
              >Buscar</v-btn
            >
          </div>
          <div v-if="showResultado">
            <div class="mt-2 mb-4">
              <h3>
                {{ materiaResultado.materia }} ({{ materiaResultado.clave }})
              </h3>
            </div>
            <v-card>
              <v-list two-line flat>
                <v-list-item-group>
                  <template v-for="(grupo, index) in materiaResultado.grupos">
                    <v-list-item :key="`gpo-${grupo.numGpo}`">
                      <template>
                        <v-list-item-content>
                          <v-list-item-title
                            v-text="grupo.profesor"
                          ></v-list-item-title>
                          <!-- <v-list-item-subtitle
                          class="text--primary"
                          v-text="item.headline"
                        ></v-list-item-subtitle> -->
                          <v-list-item-subtitle
                            v-for="(horario, index) in grupo.horarios"
                            v-text="
                              `${
                                horario.day
                              } ${horario.start.print()} - ${horario.end.print()}`
                            "
                            :key="`h-${index}`"
                          ></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-list-item-action-text
                            v-text="`Gpo: ${grupo.numGpo}`"
                          ></v-list-item-action-text>
                          <v-btn
                            rounded
                            outlined
                            color="success"
                            fab
                            small
                            @click="addSubject(grupo)"
                            ><v-icon>mdi-plus</v-icon></v-btn
                          >
                        </v-list-item-action>
                      </template>
                    </v-list-item>

                    <v-divider
                      v-if="index + 1 < materiaResultado.grupos.length"
                      :key="index"
                    ></v-divider>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-card>
          </div>
        </v-card-text>
        <v-card-text v-if="dialogTab === 1">
          <div>
            <h4>Feature for future version</h4>
            <!-- <v-text-field label="Nombre actividad" required></v-text-field> -->
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="picker" max-width="290">
      <v-color-picker elevation="15" v-model="pickedColorBox"></v-color-picker>
    </v-dialog>
    <v-row>
      <v-col md="12" sm="12" class="pt-0">
        <div class="wrapper">
          <div class="horario-header">Horario</div>
          <div
            v-for="(day, i, index) in days"
            :key="i"
            :style="daysheader(index)"
            class="days"
          >
            {{ day }}
          </div>
          <!-- hardcode '60', replace in future versions -->
          <div
            v-for="n in 60 + 1"
            :key="n"
            :style="leftSchedule(n)"
            class="left-schedule"
          >
            {{ numberToTime(n) }}
          </div>
          <div
            class="subject"
            v-for="(materia, i) in materiasFlat"
            :key="`materia-${i}`"
            :style="[calculatePosition(materia), colorBox(materia)]"
          >
            <div class="subject-container">
              <div>{{ materia.clave }}</div>
              <div>Gpo {{ materia.grupo }}</div>
              <div>
                <b>{{ materia.name }}</b>
              </div>
              <div>{{ materia.profesor }}</div>
              <div>
                <!-- <v-btn icon color="danger" @click="pickColor(materia)"> -->
                <v-btn
                  icon
                  color="danger"
                  @click="
                    picker = true;
                    pickedSubject = materia;
                  "
                >
                  <v-icon>mdi-palette</v-icon>
                </v-btn>
                <v-btn icon color="danger" @click="deleteSubject(materia)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Time from '../common/time';
import {
  sumTimes,
  substractTimes,
  numToTime,
  timeTonum,
  oneLessThan,
} from '../common/scheduler';
import daysEnum from '../common/days';
import bd from '../common/faker';

export default {
  data: () => ({
    message: '',
    tfclave: '',
    materiaResultado: [],
    dialog: false,
    dialogTab: 0,
    picker: false,
    pickedColorBox: null,
    pickedSubject: null,
    snackbar: false,
    showResultado: false,
    days: daysEnum,
    startTime: new Time(7, 0),
    endTime: new Time(22, 0),
    // Este arreglo no debe contener inconsistencias
    materias: [
      {
        clave: '2947',
        grupo: 1,
        name: 'BASES DE DATOS DISTRIBUIDAS',
        profesor: 'ING. JORGE ALBERTO RODRIGUEZ CAMPOS',
        horarios: [
          {
            start: new Time(9, 0),
            end: new Time(11, 0),
            day: daysEnum.MAR,
          },
          {
            start: new Time(9, 0),
            end: new Time(11, 0),
            day: daysEnum.JUE,
          },
        ],
        extras: {
          color: 'rgba(194,246,154,0.5)',
        },
      },
      {
        clave: '1672',
        grupo: 3,
        name: 'MICROCOMPUTADORAS',
        profesor: 'M.I. JOSE ANTONIO DE JESUS ARREDONDO GARZA',
        horarios: [
          {
            start: new Time(7, 0),
            end: new Time(8, 30),
            day: daysEnum.MAR,
          },
          {
            start: new Time(7, 0),
            end: new Time(8, 30),
            day: daysEnum.JUE,
          },
        ],
        extras: {
          color: 'rgba(224,84,84,0.8)',
        },
      },
      {
        clave: '2080',
        grupo: 10,
        name: 'RECURSOS Y NECESIDADES DE MEXICO',
        profesor: 'M.I. JOSE AUGUSTO RAMON GONZALEZ',
        horarios: [
          {
            start: new Time(11, 0),
            end: new Time(13, 0),
            day: daysEnum.MAR,
          },
          {
            start: new Time(11, 0),
            end: new Time(13, 0),
            day: daysEnum.JUE,
          },
        ],
        extras: {
          color: 'rgba(73,255,22,0.8)',
        },
      },
      {
        clave: '1055',
        grupo: 5,
        name: 'LITERATURA HISPANOAMERICANA CONTEMPORANEA',
        profesor:
          'LIC. MARIA DE GUADALUPE FLOR DIAZ DE LEON FERNANDEZ DE CASTRO',
        horarios: [
          {
            start: new Time(9, 0),
            end: new Time(11, 0),
            day: daysEnum.LUN,
          },
          {
            start: new Time(9, 0),
            end: new Time(11, 0),
            day: daysEnum.MIE,
          },
        ],
        extras: {
          color: 'rgba(214,255,0,0.9)',
        },
      },
      {
        clave: '2929',
        grupo: 1,
        name: 'BASES DE DATOS AVANZADAS',
        profesor: 'ING. JORGE ALBERTO RODRIGUEZ CAMPOS',
        horarios: [
          {
            start: new Time(7, 0),
            end: new Time(9, 0),
            day: daysEnum.LUN,
          },
          {
            start: new Time(7, 0),
            end: new Time(9, 0),
            day: daysEnum.MIE,
          },
        ],
        extras: {
          color: 'rgba(0,0,255,0.5)',
        },
      },
      {
        clave: '2932',
        grupo: 1,
        name: 'ANALISIS Y PROCESAMIENTO INTELIGENTE DE TEXTOS',
        profesor: 'M.P. OCTAVIO AUGUSTO SANCHEZ VELAZQUEZ',
        horarios: [
          {
            start: new Time(7, 0),
            end: new Time(11, 0),
            day: daysEnum.VIE,
          },
        ],
        extras: {
          color: 'rgba(235,41,187,0.7)',
        },
      },
    ],
  }),
  computed: {
    materiasFlat() {
      const subjectTmp = [];
      this.materias.forEach((m) => {
        m.horarios.forEach((h) => {
          subjectTmp.push({
            clave: m.clave,
            grupo: m.grupo,
            name: m.name,
            profesor: m.profesor,
            start: h.start,
            end: h.end,
            day: h.day,
            extras: m.extras,
          });
        });
      });
      return subjectTmp;
    },
  },
  methods: {
    leftSchedule(index) {
      const startRow = index + 1; // +1 por el header
      const endRow = startRow + 1;
      return {
        'grid-column': '1/2',
        'grid-row': `${startRow}/${endRow}`,
      };
    },
    daysheader(index) {
      const startCol = index + 1 + 1; // +1 por el header
      const endCol = startCol + 1;
      return {
        'grid-row': '1/2',
        'grid-column': `${startCol}/${endCol}`,
      };
    },
    numberToTime(n) {
      return sumTimes(this.startTime, numToTime(n - 1)).print();
    },
    calculatePosition({ day, start, end }) {
      const timeOffset = substractTimes(start, this.startTime);
      const subjectDuration = substractTimes(end, start);
      const startOffset = timeTonum(timeOffset) + 1 + 1; // +1 por el header
      const endOffset = startOffset + timeTonum(subjectDuration);
      return {
        'grid-column': this.gridColumnDay(day),
        'grid-row': `${startOffset}/${endOffset}`,
      };
    },
    colorBox(materia) {
      return {
        'background-color': materia.extras.color,
      };
    },
    gridColumnDay(day) {
      switch (day) {
        case daysEnum.LUN:
          return '2/3';
        case daysEnum.MAR:
          return '3/4';
        case daysEnum.MIE:
          return '4/5';
        case daysEnum.JUE:
          return '5/6';
        case daysEnum.VIE:
          return '6/7';
        case daysEnum.SAB:
          return '7/8';
        default:
          return '2/3';
      }
    },
    addSubject(grupo) {
      // materiaResultado has all info
      const materia = {
        clave: this.materiaResultado.clave,
        grupo: grupo.numGpo,
        name: this.materiaResultado.materia,
        profesor: grupo.profesor,
        horarios: grupo.horarios,
        extras: { color: 'rgba(255,255,255,0)' },
      };
      // Add constraints to check if is add subject is possible
      if (!this.overlaps(materia)) {
        this.materias.push(materia);
        this.materiaResultado = [];
        this.dialog = false;
        this.showResultado = false;
        this.message = 'Materia agregada';
        this.snackbar = true;
      } else {
        this.message = 'La materia se translapa con otras';
        this.snackbar = true;
      }
    },
    deleteSubject(materia) {
      this.materias = this.materias.filter((m) => m.clave !== materia.clave);
    },
    boxesOverlap(h1, h2) {
      if (h1.day === h2.day) {
        if (oneLessThan(substractTimes(h2.start, h1.end), new Time(0, 0))) {
          return true;
        }
      }

      return false;
    },
    overlaps(materia) {
      let overlap = false;
      materia.horarios.forEach((h) => {
        this.materiasFlat.forEach((m) => {
          let resItOverlap = null;
          if (oneLessThan(h.start, m.end)) {
            resItOverlap = this.boxesOverlap(h, {
              start: m.start,
              end: m.end,
              day: m.day,
            });
          } else {
            resItOverlap = this.boxesOverlap(
              { start: m.start, end: m.end, day: m.day },
              h,
            );
          }
          if (resItOverlap) {
            overlap = true;
          }
        });
      });

      return overlap;
    },
    buscarMateria() {
      if (this.tfclave.length > 2) {
        const resultadoMateria = bd.filter(
          (materia) => parseInt(this.tfclave, 10) === materia.clave,
        );
        if (resultadoMateria.length > 0) {
          console.log('Mostrando grupos');
          // this.dialog = false;
          [this.materiaResultado] = resultadoMateria;
          this.showResultado = true;
        } else {
          this.message = 'Materia no encontrada';
          this.snackbar = true;
        }
        this.tfclave = '';
      } else {
        console.log('La clave debe ser mayor de 2 caracteres');
      }
    },
  },
  watch: {
    pickedColorBox(nc) {
      // const color = `rgba(${nc.rgba.r},${nc.rgba.g},${nc.rgba.b},0.5)`;
      const color = `rgba(${nc.rgba.r},${nc.rgba.g},${nc.rgba.b},${nc.rgba.a})`;
      this.materias = this.materias.map((m) => {
        if (m.clave === this.pickedSubject.clave) {
          return {
            clave: m.clave,
            grupo: m.grupo,
            name: m.name,
            profesor: m.profesor,
            horarios: m.horarios,
            extras: {
              color,
            },
          };
        }
        return m;
      });
    },
  },
};
</script>

<style scoped>
.left-schedule {
  border-top: 1.5px solid blue;
}

.wrapper {
  display: grid;
  grid-template-columns: 0.5fr repeat(6, 1fr);
  font-size: 12px;
  text-align: center;
  grid-gap: 1.5px;
}

.subject {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 10px;
  border: 1.5px solid red;
}

.subject-container {
  display: block;
}

.horario-header {
  grid-column: 1/2;
  grid-row: 1/2;
  border-radius: 6px;
  font-size: 14px;
  border: 1.5px solid blue;
}

.days {
  border-radius: 6px;
  font-size: 14px;
  border: 1.5px solid blue;
}
</style>
