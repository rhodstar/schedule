<template>
  <v-row>
    <v-col md="6" sm="12">
      <v-text-field label="Id actividad" required></v-text-field>
      <v-text-field label="Nombre actividad" required></v-text-field>
      <v-text-field label="Grupo"></v-text-field>
      <v-text-field label="Profesor"></v-text-field>
    </v-col>
    <v-col md="6" sm="12" class="text-center">
      <v-combobox
        v-model="diasselect"
        :items="dias"
        label="Horario"
        multiple
        chips
      >
        <template v-slot:selection="data">
          <v-chip
            :key="JSON.stringify(data.item)"
            v-bind="data.attrs"
            :input-value="data.selected"
            :disabled="data.disabled"
            @click:close="data.parent.selectItem(data.item)"
          >
            <v-avatar
              class="accent white--text"
              left
              v-text="data.item.slice(0, 1).toUpperCase()"
            ></v-avatar>
            {{ data.item }}
          </v-chip>
        </template>
      </v-combobox>
      <div>Hora inicio</div>
      <v-time-picker
        v-model="horaInicio"
        landscape
        width="180"
        class="mb-5"
      ></v-time-picker>
      <div>Hora fin</div>
      <v-time-picker v-model="horaFin" landscape width="180"></v-time-picker>
    </v-col>
    <v-col md="12" sm="12">
      <v-btn class="ma-2" outlined color="indigo" @click="agregarActividad"
        >Agregar</v-btn
      >
    </v-col>
  </v-row>
</template>
