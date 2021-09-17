<template>
  <nav class="navbar is-spaced">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button">
            <strong>Sign up</strong>
          </a>
          <a class="button">
            Log in
          </a>
        </div>
      </div>
    </div>
  </nav>
  <div class="cards">
    <div class="block">
      <a>
        <span class="icon is-large" style="color: var(--primary-color);">
          <i class="far fa-3x fa-plus-square"></i>
        </span>
      </a>
    </div>
    <div class="block card is-size-3">
      <header class="card-header">
        <p class="card-header-title has-text-weight-bold">
          1. Lorem ipsum dolor sit amet.
        </p>
        <button class="card-header-icon">
          <span class="icon is-medium">
            <i class="fas fa-edit"></i>
          </span>
        </button>
        <button class="card-header-icon">
          <span class="icon is-medium">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </header>
    </div>
    <div class="block card is-size-3">
      <header class="card-header">
        <p class="card-header-title has-text-weight-bold">
          1. Lorem ipsum dolor sit amet.
        </p>
        <button class="card-header-icon">
          <span class="icon is-medium">
            <i class="fas fa-edit"></i>
          </span>
        </button>
        <button class="card-header-icon">
          <span class="icon is-medium">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </header>
    </div>
    <div class="block card is-size-3">
      <header class="card-header">
        <p class="card-header-title has-text-weight-bold">
          1. Lorem ipsum dolor sit amet.
        </p>
        <button class="card-header-icon">
          <span class="icon is-medium">
            <i class="fas fa-edit"></i>
          </span>
        </button>
        <button class="card-header-icon">
          <span class="icon is-medium">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </header>
    </div>
    <div class="block card is-size-3">
      <header class="card-header">
        <p class="card-header-title has-text-weight-bold">
          1. Lorem ipsum dolor sit amet.
        </p>
        <button class="card-header-icon">
          <span class="icon is-medium">
            <i class="fas fa-edit"></i>
          </span>
        </button>
        <button class="card-header-icon">
          <span class="icon is-medium">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </header>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "App",
  data() {
    return {
      data: []
    };
  },
  components: {},
  methods: {
    async fetchApi() {
      await axios.get("http://localhost:3000/api").then(response => {
        this.data = response.data;
      });
    }
  },
  mounted() {
    // this.fetchApi();
  }
};
</script>

<style>
:root {
  --primary-color: #eeb902;
  --background-color: #262626;
  --background-darker: #191919;
}

body {
  margin: 0px;
  padding: 0px;
  min-width: 100vw;
  min-height: 100vh;
  background-color: var(--background-color);
}
.navbar {
  background-color: var(--background-color);
}
.cards {
  width: 80vw;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.card {
  background-color: var(--primary-color);
}

body::-webkit-scrollbar {
  width: 7px;
}

body::-webkit-scrollbar-track {
  background: var(--background-color);
}

body::-webkit-scrollbar-thumb {
  background-color: var(--background-darker);
  border-radius: 5px;
}
</style>
