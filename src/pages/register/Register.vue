<template>
  <form @submit.prevent="submit()">
    <div class="register-page">
      <div class="card">
        <div class="card-header">Registro</div>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="name"
              v-model="form.name"
              class="form-control"
              placeholder="Nome Completo"
            />
          </div>
          <div class="form-group">
            <input
              required
              type="email"
              v-model="form.email"
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
              v-model="form.password"
            />
          </div>
          <button class="btn btn-primary w-100">Registrar e Entrar</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Register",
  data: () => ({
    form: {
      email: "fabiochassot@gmail.com",
      password: "123",
      name: "Fabio Chassot"
    }
  }),
  methods: {
    ...mapActions("register", ["ActionRegisterUser"]),
    async submit() {
      try {
        console.log(this.form);
        await this.ActionRegisterUser(this.form);
      } catch (err) {
        alert(err);
        alert(err.data ? err.data.message : "Não foi possível fazer login")
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
