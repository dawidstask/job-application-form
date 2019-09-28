<template>
  <div class="application">
    <span class="name">{{ application.name }}</span>
    <span class="email">{{ application.email }}</span>
    <span class="skills">{{ application.skills }}</span>
  </div>
</template>

<script>
export default {
  name: 'JobApplication',
  props: {
    application: {
      name: String,
      email: String,
      skills: String,
    },
  },
};
</script>

<style lang="scss" scoped>
  .application {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
    margin: 1em;
    padding: 0.5em;
    border: 1px solid #EFF2F6;
    background-color: #FAFBFC;
  }
  .email {
    font-size: 0.8em;
    opacity: 0.7;
  }
  .skills {
    font-size: 0.9em;
    color: #41B0C6;
  }
</style>
