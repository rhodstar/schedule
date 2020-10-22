<template>
  <div class="activity-container">
    <div>{{ activity.clave }}</div>
    <div>Gpo {{ activity.grupo }}</div>
    <div>
      <b>{{ activity.name }}</b>
    </div>
    <div>{{ activity.profesor }}</div>
    <div>
      <v-btn icon color="danger" @click="openPickerColorDialog">
        <v-icon>mdi-palette</v-icon>
      </v-btn>
      <v-btn icon color="danger" @click="deleteActivity">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: ['activity'],
  methods: {
    /**
     * Ths functions open a dialog for picking a color for activity card
     */
    openPickerColorDialog() {
      // TODO:- Define picker and and pickedSubjet, maybe propage to parent
      // picker = true;
      // pickedSubject = activity;
    },
    deleteActivity() {
      // TODO:- Propagate to parent component
    },
  },
};
</script>

<style scoped>
.activity-container {
  display: block;
}
</style>
