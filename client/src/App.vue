<template>
  <task taskText="Lorem ipsum dolor sit amet." />
</template>

<script>
import Task from "./components/Task.vue";

export default {
  name: "App",
  data() {
    return {
    };
  },
  components: { Task },
  methods: {
  },
  mounted() {
  }
};
</script>

<style>
@import './assets/style.css';
body {
  min-width: 100vw;
  min-height: 100vh;
  background-color: var(--background-color);
}
</style>
