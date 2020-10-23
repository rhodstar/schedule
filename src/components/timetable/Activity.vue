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
      <v-btn icon color="danger" @click="deleteActivityTrigger">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['activity'],
  methods: {
    ...mapActions('timetable', ['deleteActivity']),
    /**
     * Ths functions emits the open dialog for picking a color for activity card
     */
    openPickerColorDialog() {
      this.$emit('pickActivityColorDialog', this.activity);
    },
    deleteActivityTrigger() {
      this.deleteActivity(this.activity);
    },
  },
};
</script>

<style scoped>
.activity-container {
  display: block;
}
</style>
