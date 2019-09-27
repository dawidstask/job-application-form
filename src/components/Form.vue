<template>
  <div class="form">
    <form
      @submit="checkForm"
      novalidate
    >

      <p v-if="errors.length">
        <b>Please correct the following error<template v-if="errors.length > 1">s</template>:</b>
        <ul>
          <li
            v-for="error in errors"
            :key="error.id"
          >
            {{ error.value }}
          </li>
        </ul>
      </p>

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
  // props: {
  //   msg: String,
  // },
  data() {
    return {
      errors: [],
      name: null,
      email: null,
      skills: null,
    };
  },
  methods: {
    checkForm(e) {
      if (this.name && this.email && this.skills) {
        this.errors = [];

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
        this.errors.push({ id: 3, value: 'Incorrect email.' });
      }

      if (!this.skills) {
        this.errors.push({ id: 4, value: 'Skills required.' });
      }

      e.preventDefault();

      return this.errors;
    },
  },
};
</script>

<style scoped lang="scss">

</style>
