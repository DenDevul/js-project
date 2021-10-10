<template>
  <!-- <task taskText="Lorem ipsum dolor sit amet." /> -->
  <!-- <div>
    <router-link to="/">allo</router-link>
    <router-link to="/signup">privet</router-link>
  </div> -->
  <nav class="navbar">
    <div class="logo">
      <p>Todo</p>
    </div>
  </nav>
  <div class="content">
    <router-view />
  </div>
</template>

<script>
// import Task from "./components/Task.vue";

export default {
  name: 'App',
  // components: { Task },
  data() {},
  methods: {},
  mounted() {}
};
</script>

<style>
@import './assets/style.css';

#app {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-areas: 'navbar'
                        'content';
  grid-template-rows: min-content auto;
}

.navbar {
  position: fixed;
  width: 100vw;
  height: 56px;
  background: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: navbar;
}

.navbar div {
  height: 48px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
}

.navbar div p {
  color: var(--background-color);
  padding: 0 1rem 0 1.2rem;
  font-size: 2rem;
  font-family: BlackberryJam;
  user-select: none;
}

.content {
  margin-top: 80px;
  grid-area: content;
}

body {
  min-width: 100vw;
  min-height: 100vh;
  color: #fafafa;
  background-color: #fafafa;
  /* background: linear-gradient(to right, #fdc830, #f37335); */
}
</style>
