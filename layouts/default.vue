<template>
  <v-app dark>
    <v-navigation-drawer
      v-if="authenticated"
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
    <v-app-bar v-if="authenticated" :clipped-left="clipped" fixed app></v-app-bar>
    <v-content :class="{loginBackground: !authenticated}">
      <v-container>
        <v-overlay :value="isLoading">
          <pulse-loader></pulse-loader>
        </v-overlay>
        <v-row v-if="!authenticated">
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
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    PulseLoader
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
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
      return this.$auth.loggedIn
    },
    ...mapGetters({
      isLoading: 'global/getLoading'
    })
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

