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
    <task
      :taskId="1"
      :taskName="'Lorem ipsum dolor sit amet.'"
      :taskComplete="false"
    ></task>
    <task
      :taskId="2"
      :taskName="'Lorem ipsum dolor sit amet.'"
      :taskComplete="false"
    ></task>
    <task
      :taskId="3"
      :taskName="'Lorem ipsum dolor sit amet.'"
      :taskComplete="false"
    ></task>
    <task
      :taskId="42"
      :taskName="'Lorem ipsum dolor sit amet.'"
      :taskComplete="true"
    ></task>
    <div class="my-card">
      <div class="task">
        <button>
          <span>
            <i class="far fa-square fa-3x"></i>
          </span>
        </button>
        <textarea v-if="isEditing" type="text" ref="edit"></textarea>
        <p v-else ref="taskBody">5. Lorem ipsum dolor sit amet.</p>
      </div>
      <div class="controls">
        <button v-if="!isEditing" @click="editTask">
          <span>
            <i class="far fa-edit fa-3x"></i>
          </span>
        </button>
        <button v-else @click="stopEdit">
          <span>
            <i class="far fa-edit fa-3x"></i>
          </span>
        </button>
        <button>
          <span>
            <i class="fas fa-times fa-3x"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Task from "./components/Task.vue";
import { nextTick } from "@vue/runtime-core";
const axios = require("axios");

export default {
  name: "App",
  data() {
    return {
      isEditing: false
    };
  },
  components: { Task },
  methods: {
    async fetchApi() {
      await axios.get("http://localhost:3000/api").then(response => {
        this.data = response.data;
      });
    },
    async editTask() {
      let temp = this.$refs.taskBody.innerHTML;
      let height = this.$refs.taskBody.offsetHeight
      this.isEditing = true;
      nextTick(() => {
        this.$refs.edit.style.height = height + 'px'
        this.$refs.edit.value = temp;
        console.log(height);
        console.log(this.$refs.edit.offsetHeight);
      });
      // console.log(document.getElementById('input'));
    },
    async stopEdit() {
      let temp = this.$refs.edit.value;
      this.isEditing = false;
      this.$nextTick(() => {
        console.log(temp);
        this.$refs.taskBody.innerHTML = temp;
      });
    }
  },
  mounted() {
    // this.fetchApi();
  }
};
</script>

<style>
.my-card {
  display: flex;
  align-items: center;
  justify-content: end;
  min-height: 72px;
  width: 80vw;
  background-color: var(--primary-color);
  border-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
  font-size: xx-large;
  font-weight: bold;
  color: var(--background-color);
  padding-left: 1rem;
}

.task {
  display: flex;
  flex-grow: 1;
}
.task input {
  flex-grow: 1;
  font-weight: inherit;
  color: inherit;
}
.task textarea {
  flex-grow: 1;
  font-weight: inherit;
  color: inherit;
  font-size: inherit;
  background-color: inherit;
  resize: none;
  border: none;
  outline: none;
}
.controls {
  min-width: 156px;
  display: flex;
  justify-content: space-evenly;
}

.my-card button {
  border: none;
  background-color: inherit;
}

button span {
  color: var(--background-color);
}

:root {
  --primary-color: #eeb902;
  --background-color: #262626;
  --background-darker: #191919;
}

body {
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
