<template>
  <div class="form">
    <form
      @submit="submitForm"
      novalidate
    >

      <template v-if="errors.length">
        <b>Please correct the following error<template v-if="errors.length > 1">s</template>:</b>
        <ul>
          <li
            v-for="error in errors"
            :key="error.id"
          >
            {{ error.value }}
          </li>
        </ul>
      </template>

      <div>
        <label>Name</label>
        <input
          v-model="name"
          type="text"
          autofocus
        >
      </div>

      <div>
        <label>Email</label>
        <input
          v-model="email"
          type="email"
        >
      </div>

      <div>
        <label>Skills</label>
        <select
          v-model="skills"
        >
          <option></option>
          <optgroup label="Front-end">
            <option value="vue">Vue.js</option>
            <option value="react">React.js</option>
            <option value="angular">Angular</option>
            <option value="backbone">Backbone</option>
            <option value="ember">Ember</option>
            <option value="polymer">Polymer</option>
          </optgroup>
          <optgroup label="Back-end">
            <option value="node">Node.js</option>
            <option value="mysql">MySQL</option>
          </optgroup>
        </select>
      </div>

      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

export default {
  name: 'Form',
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      skills: null,
    };
  },
  methods: {
    submitForm() {
      if (!this.isFormValid()) {
        return;
      }

      this.$store.commit(
        'ADD_JOB_APPLICATION',
        {
          name: this.name,
          email: this.email,
          skills: this.skills,
        },
      );
      this.resetForm();
    },
    isFormValid() {
      if (this.name && this.email && this.skills) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push({ id: 1, value: 'Name required.' });
      }

      if (!this.email) {
        this.errors.push({ id: 2, value: 'Email required.' });
      }

      if (this.email && !validateEmail(this.email)) {
        this.errors.push({ id: 3, value: 'Email incorrect.' });
      }

      if (!this.skills) {
        this.errors.push({ id: 4, value: 'Skills required.' });
      }

      return false;
    },
    resetForm() {
      this.errors = [];
      this.name = null;
      this.email = null;
      this.skills = null;
    },
  },
};
</script>

<style scoped lang="scss">

</style>
