// import myactivities from './myactivities';
/** ACITITIVIES is a constant for localstorage */
const ACTIVITIES = 'ttblact';

const timetable = {
  namespaced: true,

  state: () => ({
    // activities: myactivities,
    activities: JSON.parse(localStorage.getItem(ACTIVITIES)) || [],
  }),

  getters: {
    activities: (state) => state.activities,

    /**
     * getActivities flattens activity array.
     * It spreads de horarios array into activities
     * return spread activies
     */
    getActivities: (state) => {
      const actTmp = [];
      state.activities.forEach((m) => {
        m.horarios.forEach((h) => {
          actTmp.push({
            clave: m.clave,
            grupo: m.grupo,
            name: m.name,
            profesor: m.profesor,
            start: h.start,
            end: h.end,
            day: h.day,
            extras: m.extras,
          });
        });
      });
      return actTmp;
    },

    /**
     * isActivityInto verifies is the activity argument is not in the
     * activity array.
     * In order to take arguments this getters returns a functions
     * Returns true if activity is in array
     *  en caso constrario regresa falso.
     */
    isActivityInto: (state) => (activity) => {
      const act = state.activities.filter((a) => a.clave === activity.clave);
      return act.length !== 0;
    },
  },

  mutations: {
    updateLocalStorage: (state) => {
      const acititiesJson = JSON.stringify(state.activities);
      localStorage.setItem(ACTIVITIES, acititiesJson);
    },
  },

  actions: {
    deleteActivity: ({ commit, state }, activity) => {
      // Future version will update in server
      state.activities = state.activities.filter(
        (a) => a.clave !== activity.clave,
      );
      commit('updateLocalStorage');
    },

    addActivity: ({ commit, state }, activity) => {
      state.activities.push(activity);
      commit('updateLocalStorage');
    },

    /**
     * updateActivities allow us to chance the color of a activity pass as an
     * argument.
     * It works by iterating all activity array and checks if keys match,
     * if so it chances the color by rebuiling the objects
     */
    updateActivities: ({ commit, state }, { activity, color }) => {
      state.activities = state.activities.map((m) => {
        if (m.clave === activity.clave) {
          return {
            clave: m.clave,
            grupo: m.grupo,
            name: m.name,
            profesor: m.profesor,
            horarios: m.horarios,
            extras: {
              color,
            },
          };
        }
        return m;
      });
      commit('updateLocalStorage');
    },
  },
};

export default timetable;
