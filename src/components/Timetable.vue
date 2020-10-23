<template>
  <div class="timetable-grid-display">
    <div class="schedule-header">{{ leftTitle }}</div>
    <!-- Start of timetable header -->
    <div
      v-for="(day, i, index) in days"
      :key="i"
      :style="daysHeaderGridPosStyle(index)"
      class="days-header"
    >
      {{ day }}
    </div>
    <!-- End of timetable header -->
    <!-- Start of left times -->
    <div
      v-for="n in lapsus + 1"
      :key="n"
      :style="leftTimePosStyle(n)"
      class="left-schedule-time"
    >
      {{ numberToTime(n) }}
    </div>
    <!-- End of left times -->
    <!-- Render all activities -->
    <ActivityManager
      v-for="(activity, i) in getActivities"
      :key="`materia-${i}`"
      :activity="activity"
      :startTime="startTime"
      @pickActivityColor="pickActivityColor"
    />
    <!-- Dialogs for managin Activities -->
    <activity-color
      :activity="activityPicked"
      :pickerDialog="pickerDialog"
      @refreshPickerVariable="setPickerDialogToFalse"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ActivityManager from './timetable/ActivityManager.vue';
import ActivityColor from './timetable/ActivityColor.vue';
import daysEnum from '../common/days';
import Time from '../common/time';
import { sumTimes, numToTime } from '../common/scheduler';

export default {
  components: {
    ActivityManager,
    ActivityColor,
  },
  data: () => ({
    /**
     * daysEmum asigned to days let us retrive the enum and load it as
     * a VueJS reactive property
     */
    days: daysEnum,
    leftTitle: 'Horario',
    /**
     * The following 3 variables help us to decide from which hour render
     * the timetable
     * lapsus is the number of iteration
     * By default, iteration are each 15 minutes
     */
    startTime: new Time(7, 0),
    endTime: new Time(22, 0),
    lapsus: 60,
    /**
     * Following three variables control the color picker dialog
     */
    pickerDialog: false,
    activityPicked: null,
  }),
  computed: {
    ...mapGetters('timetable', ['getActivities']),
  },
  methods: {
    ...mapActions('timetable', ['deleteActivity']),
    /**
     * Method to return styles that will be injected in a HTML component to
     * position it on the grid
     * @param index, the position of HTML component
     * @return js-css string
     */
    daysHeaderGridPosStyle(index) {
      const startCol = index + 2; // +2 por el header
      const endCol = startCol + 1;
      return {
        'grid-row': '1/2',
        'grid-column': `${startCol}/${endCol}`,
      };
    },
    /**
     * This methos allow us to calculate the string of column and row grid
     * to apply fo each time
     * @param index Is the index vertical movement while rendering the times
     */
    leftTimePosStyle(index) {
      const startRow = index + 1; // +1 por el header
      const endRow = startRow + 1;
      return {
        'grid-column': '1/2',
        'grid-row': `${startRow}/${endRow}`,
      };
    },
    /**
     * This function is a wrapper in order not to use time operations directly
     * from Build-by-me time library
     */
    numberToTime(n) {
      // TODO:- Explain how is n?
      return sumTimes(this.startTime, numToTime(n - 1)).print();
    },
    pickActivityColor(activity) {
      this.pickerDialog = true;
      this.activityPicked = activity;
    },
    setPickerDialogToFalse() {
      this.pickerDialog = false;
    },
  },
};
</script>

<style scoped>
/* having display:grid makes possible the timetable */
.timetable-grid-display {
  display: grid;
  grid-template-columns: 0.5fr repeat(6, 1fr);
  font-size: 12px;
  text-align: center;
  grid-gap: 1.5px;
}

.schedule-header {
  grid-column: 1/2;
  grid-row: 1/2;
  border-radius: 6px;
  font-size: 14px;
  border: 1.5px solid blue;
}

.days-header {
  border-radius: 6px;
  font-size: 14px;
  border: 1.5px solid blue;
}

.left-schedule-time {
  border-top: 1.5px solid blue;
}
</style>
