<template>
  <div class="applications">
    <h1>Job applications</h1>

    <template v-if="applications.length">
      <div v-for="application in applications" :key="application.id">
        <job-application :application="application"></job-application>
      </div>
    </template>
    <template v-if="!applications.length">
      <p>No job applications so far</p>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import JobApplication from '@/components/JobApplication.vue';

export default {
  name: 'JobApplications',
  components: {
    JobApplication,
  },
  computed: {
    ...mapGetters({
      applications: 'APPLICATIONS',
    }),
  },
};
</script>
