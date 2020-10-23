<template>
  <v-dialog
    :value="panelDialog"
    @click:outside="refreshPanelDialogVar"
    width="900px"
  >
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-btn color="blue" text @click="refreshPanelDialogVar">Cerrar</v-btn>
        <v-tabs v-model="dialogTab">
          <v-tab>Materias FI</v-tab>
          <v-tab>Otras actividades</v-tab>
        </v-tabs>
      </v-card-title>
      <v-card-text v-if="dialogTab === 0">
        <search-subject-tab @close="refreshPanelDialogVar" />
      </v-card-text>
      <v-card-text v-if="dialogTab === 1">
        <h1>In progress ...</h1>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import SearchSubjectTab from './SearchSubjectTab.vue';

export default {
  props: ['panelDialog'],
  components: {
    SearchSubjectTab,
  },
  data: () => ({
    dialogTab: 0,
  }),
  methods: {
    refreshPanelDialogVar() {
      this.$emit('refreshPanelVariable');
    },
  },
};
</script>
