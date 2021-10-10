<template>
  <!-- <task taskText="Lorem ipsum dolor sit amet." /> -->
  <!-- <div>
    <router-link to="/">allo</router-link>
    <router-link to="/signup">privet</router-link>
  </div> -->
  <router-view />
</template>

<script>
// import Task from "./components/Task.vue";

export default {
  name: "App",
  // components: { Task },
  data() {
  },
  methods: {
  },
  mounted() {}
};
</script>

<style>
@import "./assets/style.css";

#app {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

body {
  min-width: 100vw;
  min-height: 100vh;
  color: var(--primary-color);
  /* background-color: var(--background-color); */
  background: linear-gradient(to right, #fdc830, #f37335);
}
</style>
