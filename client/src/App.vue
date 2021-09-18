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
      <button>
        <span>
          <i class="far fa-square fa-3x"></i>
        </span>
      </button>
      <div class="task">
        <textarea readonly type="text" ref="edit" id="edit" >Lorem ipsum dolor sit amet.</textarea>
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
// const axios = require("axios");

export default {
  name: "App",
  data() {
    return {
      isEditing: false,
      edit: undefined
    };
  },
  components: { Task },
  methods: {
    // async fetchApi() {
    //   await axios.get("http://localhost:3000/api").then(response => {
    //     this.data = response.data;
    //   });
    // },
    editTask() {
      this.edit.readOnly = false;
      this.edit.focus()
      this.isEditing = true;
    },
    stopEdit() {
      this.edit.readOnly = true;
      this.isEditing = false;
    },
    onInput() {
      this.edit.style.height = "auto";
      this.edit.style.height = this.edit.scrollHeight + "px";
    }
  },
  mounted() {
    this.edit = this.$refs.edit
    this.edit.addEventListener('input', this.onInput, false);
    this.edit.addEventListener('click', this.editTask, false)
    this.edit.addEventListener('blur', this.stopEdit, false)
  }
};
</script>

<style>
.my-card {
  display: flex;
  align-items: start;
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
  padding-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  margin-bottom: 1.5rem;
}

.task {
  display: flex;
  flex-grow: 1;
  padding: 0 16px;
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
  overflow: hidden;
  cursor: default;
}
.controls {
  min-width: 104px;
  justify-content: space-between;
  display: flex;
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
