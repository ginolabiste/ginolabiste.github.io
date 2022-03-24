<template>
  <v-app :style="{background: $vuetify.theme.themes.dark.background}">

  </v-app>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',

  components: {
    NavBar
  },

  data: () => ({
    //
  })
}
</script>
