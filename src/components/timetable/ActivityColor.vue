<template>
  <v-dialog
    :value="pickerDialog"
    max-width="290"
    @click:outside="refreshPickerDialogVar"
  >
    <v-color-picker elevation="15" v-model="colorPicked" />
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['pickerDialog', 'activity'],
  data: () => ({
    colorPicked: null,
  }),
  methods: {
    ...mapActions('timetable', ['updateActivities']),
    refreshPickerDialogVar() {
      this.$emit('refreshPickerVariable');
    },
  },
  watch: {
    colorPicked(nc) {
      const color = `rgba(${nc.rgba.r},${nc.rgba.g},${nc.rgba.b},${nc.rgba.a})`;
      this.updateActivities({ activity: this.activity, color });
    },
  },
};
</script>
