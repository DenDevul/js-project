<template>
  <div class="block card is-size-3">
    <header class="card-header">
      <input
        v-if="isEditing"
        id="input"
        class="card-header-title has-text-weight-bold"
        type="text"
        ref="edit"
      />
      <p v-else class="card-header-title has-text-weight-bold" ref="taskBody">
        {{ taskId }}. {{ taskName }}
      </p>
      <button class="card-header-icon" v-on:click="checkTask">
        <span class="icon is-medium">
          <i class="far fa-square" ref="check"></i>
        </span>
      </button>
      <button class="card-header-icon" v-on:click="editTask">
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
</template>

<script>
import { nextTick } from "@vue/runtime-core";
export default {
  name: "Task",
  props: {
    taskId: Number,
    taskName: String,
    taskComplete: Boolean
  },
  methods: {
    checkTask() {
      this.isComplete = !this.isComplete;
      this.$refs.taskBody.classList.toggle("crossed-line");
      this.$refs.check.classList.toggle("fa-square");
      this.$refs.check.classList.toggle("fa-check-square");
    },
    async editTask() {
      this.isEditing = true;
      const temp = this.$refs.taskBody.innerHTML;
      await nextTick();
      // console.log(document.getElementById('input'));
      this.$refs.edit.value = temp;
      // this.$refs.edit.value = temp
      // this.$refs.edit.value = this.$refs.taskBody.innerHTML
    }
  },
  mounted() {
    if (this.isComplete) {
      this.$refs.taskBody.classList.toggle("crossed-line");
      this.$refs.check.classList.toggle("fa-square");
      this.$refs.check.classList.toggle("fa-check-square");
    }
  },
  data() {
    return {
      id: this.taskId,
      name: this.taskName,
      isComplete: this.taskComplete,
      isEditing: false
    };
  }
};
</script>

<style>
.card {
  background-color: var(--primary-color);
}
.crossed-line {
  text-decoration: line-through;
}
input {
  background-color: var(--primary-color);
  border-style: hidden;
  outline: none;
  font-size: inherit;
  border-radius: inherit;
  height: 72px;
}
</style>