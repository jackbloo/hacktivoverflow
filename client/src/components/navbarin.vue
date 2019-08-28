<template>
  <div>
    <v-toolbar>
      <v-toolbar-title><router-link to="/overflow/all">HacktivOverflow</router-link></v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text ><createQuestion></createQuestion></v-btn>
        <v-btn text @click="Logout">Signout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import createQuestion from '../components/createQuestion'
export default {
  components: {
    createQuestion
  },
methods: {
  Logout(){
    localStorage.removeItem('access_token')
    this.$router.push('/home')
  }
}
}
</script>

<style>

</style>