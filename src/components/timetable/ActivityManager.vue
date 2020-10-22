<template>
  <div
    class="activity"
    :style="[calculatePosition(activity), colorBox(activity)]"
  >
    <Activity :activity="activity" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { substractTimes, timeTonum } from '@/common/scheduler';
import daysEnum from '@/common/days';
import Activity from './Activity.vue';

export default {
  props: ['startTime', 'activity'],
  components: {
    Activity,
  },
  computed: {
    ...mapGetters('timetable', ['getActivities']),
  },
  methods: {
    calculatePosition({ day, start, end }) {
      const timeOffset = substractTimes(start, this.startTime);
      const subjectDuration = substractTimes(end, start);
      // TODO:- Explain the +2
      const startOffset = timeTonum(timeOffset) + 2;
      const endOffset = startOffset + timeTonum(subjectDuration);
      return {
        'grid-column': this.gridColumnDay(day),
        'grid-row': `${startOffset}/${endOffset}`,
      };
    },
    colorBox(activity) {
      return {
        'background-color': activity.extras.color,
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
  },
};
</script>

<style scoped>
.activity {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius: 10px;
  border: 1.5px solid red;
}
</style>
