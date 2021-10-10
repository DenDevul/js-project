<template>
  <div class="login">
    <form @submit.prevent="login">
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
        Войти
      </button>
    </form>
    <a href="#">Вспомнить пароль</a>
    <p>
      Нет аккаунта? <router-link to="/signup">Зарегистрироваться</router-link>
    </p>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    async login() {
      const data = {
        email: this.email,
        password: this.password
      };

      axios
        .post('/api/user/login', data)
        .then((res) => {
          const token = res.data
          sessionStorage.setItem('JWT', token)
          axios.defaults.headers.common.Authorization = `Bearer ${token}`
          this.$router.push({ name: 'home' });
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  }
};
</script>

<style>
.login {
  background-color: rgb(255 255 255 / 5%);
  box-shadow: 0 0 16px 2px #00000027;
  height: 250px;
  width: 300px;
  display: grid;
  grid-template-rows: 8fr 1fr 1fr;
  border-radius: 8px;
  padding: 1rem 2rem;
}

.login input {
  height: 2rem;
  border: none;
  border-radius: 5px;
  padding-left: 1rem;
}
.login input:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2pt var(--primary-alt);
}

.login button {
  color: var(--primary-color);
  background: var(--background-color);
  font-weight: 600;
  border: none;
  border-radius: 5px;
  height: 2rem;
}
.login button:hover {
  background-color: #1f1f1f;
}
.login button:active {
  box-shadow: 0 0 0 2pt var(--primary-alt);
}

.login > a {
  font-size: smaller;
  font-style: italic;
  align-self: end;
  margin-left: auto;
}

.login > p {
  font-size: smaller;
  font-style: italic;
  color: var(--background-color);
  align-self: end;
  margin-left: auto;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
