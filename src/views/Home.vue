<template>
  <div class="home">
    <h1>Application form</h1>
    <Form />
  </div>
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue';

export default {
  name: 'home',
  components: {
    Form,
  },
};
</script>
