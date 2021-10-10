<template>
  <div class="login sign-up">
    <form @submit.prevent="signup">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email@example.com"
        v-model="email"
        required
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Пароль"
        v-model="password"
        required
      />
      <button type="submit">
        Регистрация
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    signup() {
      let data = {
        email: this.email,
        password: this.password
      };

      console.log(data);
    }
  }
};
</script>

<style>
.sign-up {
  height: 200px;
  grid-template-rows: 1fr;
}
</style>