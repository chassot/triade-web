<template>
  <div class="container-page">
    <div class="title-tab btn btn-light" v-bind:class="{ disabled: !formLogin }" v-on:click="formLogin = true">Login</div>
    <div class="title-tab btn btn-light" v-bind:class="{ disabled: formLogin }" v-on:click="formLogin = false">Registro</div>
    <div class="form" v-show="formLogin">
      <form @submit.prevent="submitLogin()">
        <div class="login-page">
          <div class="card">
            <div class="card-body">
              <div class="form-group">
                <input
                  required
                  type="email"
                  v-model="form1.uid"
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
                  v-model="form1.secret"
                />
              </div>
              {{message}}
              <button class="btn btn-primary w-100">Entrar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="form" v-show="!formLogin">
      <form @submit.prevent="submitRegister()">
        <div class="login-page">
          <div class="card">
            <div class="card-body">
              <div class="form-group">
                <input
                  required
                  type="name"
                  v-model="form2.name"
                  class="form-control"
                  placeholder="Nome Completo"
                />
              </div>
              <div class="form-group">
                <input
                  required
                  type="email"
                  v-model="form2.email"
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
                  v-model="form2.password"
                />
              </div>
              <button class="btn btn-primary w-100">Registrar e Entrar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({
    form1: {
      uid: "fabiochassot@gmail.com",
      secret: "123"
    },
    form2: {
      name: "Fabio Chassot",
      email: "fabiochassot@gmail.com",
      password: "123"
    },
    formLogin: true
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
    ...mapActions("auth", ["ActionRegisterUser"]),
    changeForm() {
      this.formLogin = !!this.formLogin;
    },
    async submitLogin() {
      try {
        await this.ActionDoLogin(this.form1);
        this.$router.push({ name: 'home' })
      } catch (err) {
        alert(err.data ? err.data.message : "Não foi possível fazer login");
      }
    },
    async submitRegister() {
      try {
        console.log(this.form);
        await this.ActionRegisterUser(this.form2);
        this.$router.push({ name: 'home' })
      } catch (err) {
        alert(err);
        alert(err.data ? err.data.message : "Não foi possível fazer login")
      }
    }
  }
};
</script>

<style scoped lang="scss">
.container-page {
  height: 100vh;  
  display: block;
  align-items: center;
  justify-content: center;  
  .title-tab {    
    width: 15%;
  }
  .form {    
    width: 30%;
  }  
}
</style>
