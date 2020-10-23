<template>
  <!-- This template will be home users app -->
  <v-container fluid>
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
      @click="openPanelDialog = true"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-row>
      <v-col md="12" sm="12" class="pt-0"> <Timetable /> </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Timetable from '../components/Timetable.vue';

export default {
  // Schedule -> Home refactor will be perform!
  name: 'Shedule',
  components: { Timetable },
  data: () => ({
    // TODO:- Make dialog work
    openPanelDialog: false,
  }),
};
</script>
