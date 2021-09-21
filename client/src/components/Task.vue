<template>
  <div class="task" ref="task">
    <button class="check-btn" @click="checkTask">
      <span>
        <i class="far fa-square" ref="checkIcon"></i>
      </span>
    </button>
    <div class="task-text">
      <textarea readonly type="text" ref="text" v-model="this.text" />
    </div>
    <div class="task-controls">
      <button v-if="!isEditing" @click="editTask">
        <span>
          <i class="far fa-edit"></i>
        </span>
      </button>
      <button v-else @click="stopEdit">
        <span>
          <i class="fas fa-arrow-circle-left"></i>
        </span>
      </button>
      <button @click="removeTask">
        <span>
          <i class="fas fa-times"></i>
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    taskId: Number,
    taskText: String,
    taskComplete: Boolean
  },
  methods: {
    editTask() {
      if (this.isComplete) {
        this.checkTask();
      }

      this.$refs.text.readOnly = false;
      this.$refs.text.focus();
      this.isEditing = true;
    },
    stopEdit() {
      this.$refs.text.value = this.$refs.text.value.trim();
      this.onInput();
      this.$refs.text.readOnly = true;
      this.isEditing = false;
    },
    onInput() {
      this.$refs.text.style.height = "auto";
      this.$refs.text.style.height = this.$refs.text.scrollHeight + "px";
    },
    checkTask() {
      this.$refs.checkIcon.classList.toggle("fa-square");
      this.$refs.checkIcon.classList.toggle("fa-check-square");
      this.$refs.text.classList.toggle("crossed-line");
      this.isComplete = !this.isComplete;
    },
    removeTask() {
      this.$refs.task.remove();
    }
  },
  mounted() {
    if (this.isComplete) {
      this.$refs.checkIcon.classList.toggle("fa-square");
      this.$refs.checkIcon.classList.toggle("fa-check-square");
      this.$refs.text.classList.toggle("crossed-line");
    }

    this.$refs.text.addEventListener("input", this.onInput, false);
    this.$refs.text.addEventListener("click", this.editTask, false);
    this.$refs.text.addEventListener("blur", this.stopEdit, false);
  },
  data() {
    return {
      id: this.taskId,
      text: this.taskText,
      isComplete: this.taskComplete,
      isEditing: false
    };
  }
};
</script>

<style>
.task {
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template: "check text controls";
  grid-template-columns: min-content auto min-content;
  color: var(--background-color);
  background-color: var(--primary-color);
  border-radius: 0.25rem;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
  font-size: xx-large;
  font-weight: bold;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.task-text {
  grid-area: text;
  display: flex;
  padding: 0 1rem;
}
.task-text textarea {
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
.task-controls {
  grid-area: controls;
  min-width: 104px;
  margin-bottom: auto;
  display: flex;
  justify-content: space-between;
}
.check-btn {
  grid-area: check;
  margin-bottom: auto;
}
.task button {
  font-size: 2rem;
  border: none;
  background-color: inherit;
}
.task span {
  color: var(--background-color);
}

.crossed-line {
  text-decoration: line-through;
}

@media screen and (max-width: 480px) {
  .task {
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
    grid-template-areas:
      "check controls"
      "text text";
    grid-template-rows: min-content 1fr;
    grid-template-columns: 1fr 1fr;
    padding: 0.5rem;
    font-size: large;
  }
  .task-text {
    padding: 0;
  }
  .task button {
    font-size: 1.75rem;
  }
  .check-btn {
    margin-right: auto;
  }
  .fa-edit,
  .fa-arrow-circle-left {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .task-controls {
    min-width: 76px;
  }
}
</style>