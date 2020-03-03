<template>
  <form @submit.prevent="submit()">
    <div class="login-page">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="email"
              v-model="form.uid"
              class="form-control"
              placeholder="E-mail"
            />
          </div>
          <div class="form-group">
            <input
              required
              type="password"
              placeholder="Senha"
              class="form-control"
              v-model="form.secret"
            />
          </div>
          {{message}}
          <router-link to="/register" tag="button">register</router-link>
          <button class="btn btn-primary w-100">Entrar</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    form: {
      uid: "fabiochassot@gmail.com",
      secret: "123"
    }
  }),
  computed: {
    message: {
      get() {
        return this.$store.state.auth.msg;
      },
      set(value) {
        this.$store.commit("ActionSetMsg", value);
      }
    }
  },
  methods: {
    ...mapActions("auth", ["ActionDoLogin"]),
    async submit() {
      try {
        await this.ActionDoLogin(this.form);
      } catch (err) {
        alert(err.data ? err.data.message : "Não foi possível fazer login");
      }
    }
  }
};
</script>

<style scoped lang="scss">
.login-page {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .card {
    width: 30%;
  }
}
</style>
