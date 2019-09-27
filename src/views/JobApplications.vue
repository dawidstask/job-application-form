<template>
  <div class="applications">
    <h1>Job applications</h1>

    <template v-if="applications.length">
      <div v-for="application in applications" :key="application.id">
        <p>{{ application.name }}</p>
        <p>{{ application.email }}</p>
        <p>{{ application.skills }}</p>
      </div>
    </template>
    <template v-if="!applications.length">
      <p>No job applications so far</p>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'JobApplications',
  computed: {
    ...mapGetters({
      applications: 'APPLICATIONS',
    }),
  },
};
</script>
