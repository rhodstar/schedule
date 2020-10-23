<template>
  <div>
    <div>
      <v-text-field
        label="Clave de la materia"
        required
        class="d-inline-flex mr-2"
        v-model="subjectKeyQuery"
        v-on:keyup.enter="searchSubject"
      ></v-text-field>
      <v-btn
        outlined
        rounded
        color="primary"
        class="d-inline-flex"
        @click="searchSubject"
        >Buscar</v-btn
      >
    </div>
    <div v-if="showResults">
      <div class="mt-2 mb-4">
        <h3>{{ subjectsResult.materia }} ({{ subjectsResult.clave }})</h3>
      </div>
      <v-card>
        <v-list two-line flat>
          <v-list-item-group>
            <template v-for="(grupo, index) in subjectsResult.grupos">
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
                      @click="addActivityFromSubject(grupo)"
                      ><v-icon>mdi-plus</v-icon></v-btn
                    >
                  </v-list-item-action>
                </template>
              </v-list-item>

              <v-divider
                v-if="index + 1 < subjectsResult.grupos.length"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script>
import bd from '@/common/faker';
import { mapGetters, mapActions } from 'vuex';
import Time from '@/common/time';
import { substractTimes, oneLessThan } from '@/common/scheduler';

export default {
  data: () => ({
    subjectKeyQuery: '',
    showResults: false,
    subjectsResult: [],
  }),
  computed: {
    ...mapGetters('timetable', ['getActivities', 'isActivityInto']),
  },
  methods: {
    ...mapActions('timetable', ['addActivity']),
    ...mapActions(['triggerSnackMessage']),
    searchSubject() {
      if (this.subjectKeyQuery.length > 2) {
        const subjectDBResult = bd.filter(
          (subject) => parseInt(this.subjectKeyQuery, 10) === subject.clave,
        );
        if (subjectDBResult.length > 0) {
          [this.subjectsResult] = subjectDBResult;
          this.showResults = true;
        } else {
          this.triggerSnackMessage('Materia no encontrada');
        }
        this.subjectKeyQuery = '';
      } else {
        this.triggerSnackMessage('La clave debe ser mayor de 2 caracteres');
      }
    },
    addActivityFromSubject(group) {
      // materiaResultado has all info
      const activity = {
        clave: this.subjectsResult.clave,
        grupo: group.numGpo,
        name: this.subjectsResult.materia,
        profesor: group.profesor,
        horarios: group.horarios,
        extras: { color: 'rgba(255,255,255,0)' },
      };
      // TODO:- Check isActivityInto(a) !!
      if (!this.isActivityInto(activity)) {
        if (!this.overlaps(activity)) {
          this.addActivity(activity);
          this.subjectsResult = [];
          // We must create a method to close dialog
          this.$emit('close');
          this.showResults = false;
          this.triggerSnackMessage('Materia agregada');
        } else {
          this.triggerSnackMessage('La materia se translapa con otras');
        }
      } else {
        this.triggerSnackMessage('La materia ya se habia agregado');
      }
    },
    /**
     * The following are auxiliary methods for addActivity()
     */
    overlaps(materia) {
      let overlap = false;
      materia.horarios.forEach((h) => {
        this.getActivities.forEach((m) => {
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
    boxesOverlap(h1, h2) {
      if (h1.day === h2.day) {
        if (oneLessThan(substractTimes(h2.start, h1.end), new Time(0, 0))) {
          return true;
        }
      }

      return false;
    },
  },
};
</script>
