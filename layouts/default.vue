<template>
  <v-app dark>
    <v-navigation-drawer
      v-if="loggedIn"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar v-if="loggedIn" :clipped-left="clipped" fixed app></v-app-bar>
    <v-content :class="{loginBackground: !loggedIn}">
      <v-container>
        <v-row v-if="!loggedIn">
          <v-col cols="12">
            <h1 class="text-center">Sistema de gestion de consultorios</h1>
          </v-col>
        </v-row>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      loggedIn: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  computed: {
    authenticated() {
      return (this.loggedIn = this.$auth.loggedIn)
    }
  },
  mounted() {
    this.authenticated
  }
}
</script>
<style>
.loginBackground {
  background-image: radial-gradient(
    circle,
    #e4f0f5,
    #d9eff7,
    #ceeef7,
    #c2eef7,
    #b5edf6
  ) !important;
}
</style>

