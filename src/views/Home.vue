<template>
  <!-- This template will be home users app -->
  <v-container fluid>
    <!-- snackNotificationMessage snackbar component -->
    <!-- Accessing the vuex state variables is consider bad practise. but I
    hadnt find another way since v-snackbar has no events to tell wheter
    its binding model has
    chance state -->
    <v-snackbar v-model="$store.state.globalSnackBarState">
      {{ getSnackMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="setSnackState(false)">
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
      @click="setPanelDialogState(true)"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-row>
      <v-col md="12" sm="12" class="pt-0">
        <Timetable
          :panelDialog="openPanelDialog"
          @refreshPanelVariable="setPanelDialogState(false)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Timetable from '../components/Timetable.vue';

export default {
  name: 'Home',
  components: { Timetable },
  data: () => ({
    openPanelDialog: false,
  }),
  computed: {
    /**
     * getSnackMessage is getter from Vuex general
     * storage to reuse the snack bar define in this View.
     * To pop up a message just call triggerSnackMessage(msg)  from
     * vuex action
     */
    ...mapGetters(['getSnackMessage']),
  },
  methods: {
    ...mapMutations(['setSnackState']),
    /**
     * Manage the dialog panel state
     * true for visisble
     * false for hidden
     * this panel has searchSubject and add Activity features
     */
    setPanelDialogState(state) {
      this.openPanelDialog = state;
    },
  },
};
</script>
