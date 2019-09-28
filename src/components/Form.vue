<template>
  <div class="form">
    <form
      @submit="submitForm"
      novalidate
    >

      <template v-if="errors.length">
        <div class="errors">
          <b>Please correct the following error<template v-if="errors.length > 1">s</template>:</b>
          <ul>
            <li
              v-for="error in errors"
              :key="error.id"
            >
              {{ error.value }}
            </li>
          </ul>
        </div>
      </template>

      <div class="form-element">
        <div>
          <label>Name</label>
          <span
            @mouseover="isInfoVisible = true"
            @mouseleave="isInfoVisible = false"
            class="icon"
          >i</span>
        </div>
        <input
          v-model="name"
          type="text"
          autofocus
        >
      </div>

      <div class="form-element">
        <label>Email</label>
        <input
          v-model="email"
          type="email"
        >
      </div>

      <div class="form-element">
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

      <div class="form-element submit">
        <input type="submit" value="Send">
      </div>
    </form>

    <span
      v-if="isInfoVisible"
      class="info-box"
    >
      Let's be friends, please provide your name so we can get in touch with you!
    </span>

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
      isInfoVisible: false,
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
.errors {
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  border-radius: .25rem;

  ul {
    list-style: none;
    margin: 0.5em;
    padding: 0;
  }
}

.form-element {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1em 0;

  label {
    margin: 0.2em 0;
  }

  input, select {
    width: 100%;
    height: 1.5em;
    font-size: 1em;
    background-color: #F5F8FA;
    border: 1px solid #DFE6ED;
  }

  &.submit {
    align-items: flex-end;

    input {
      width: 5em;
      height: 2em;
      font-size: 0.9em;
      color: white;
      background-color: #25A4BC;
      border: none;
    }
  }

  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    padding: 0;
    margin: 0 0.4em;
    font-size: 0.8em;
    line-height: 1em;
    color: white;
    background-color: #7693B2;
    border-radius: 1em;
    cursor: pointer;
  }
}

.info-box {
  position: absolute;
  top: 158px;
  left: 350px;
  height: 39px;
  width: 230px;
  padding: 15px 5px 15px 15px;
  color: white;
  background-color: #425B76;
  border-radius: 5px;
  font-size: 13px;
  text-align: left;

  &:after {
    content: " ";
    position: absolute;
    left: -11px;
    top: 18px;
    border-top: 15px solid transparent;
    border-right: 15px solid #425B76;
    border-left: none;
    border-bottom: 15px solid transparent;
  }
}
</style>
