<template>
  <v-row>
    <v-col md="6" lg="6" xl="6" class="d-none d-sm-flex">
      <v-img src="/img/nurse.jpg" class="img-login"></v-img>
    </v-col>
    <v-col md="6" xs="12" lg="6" xl="6">
      <v-card raised max-width="90%" class="mx-auto pa-5" min-height="100%">
        <v-card-title>Inicio de sesión</v-card-title>
        <v-form>
          <v-text-field v-model="credentials.email" label="Correo Electrónico"></v-text-field>
          <v-text-field v-model="credentials.password" label="Contraseña"></v-text-field>
          <div class="btn-container d-flex justify-space-between align-center">
            <v-btn raised depressed color="primary" @click="userLogin">Iniciar sesión</v-btn>
            <small class="text--secondary forgot-password">¿Olvidaste tu correo/contraseña?</small>
          </div>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', {
          data: this.credentials
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
.img-login {
  border-radius: 5px;
}
.forgot-password {
  cursor: pointer;
}
</style>