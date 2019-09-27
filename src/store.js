import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    applications: [],
  },
  getters: {
    APPLICATIONS: state => state.applications,
  },
  mutations: {
    ADD_JOB_APPLICATION(state, application) {
      if (!application.name || !application.email || !application.skills) {
        console.error('Trying to add null values to the store!');
        return;
      }

      state.applications.push({ id: state.applications.length + 1, ...application });
      console.log('store: applications', this.state.applications);
    },
  },
  actions: {

  },
});
