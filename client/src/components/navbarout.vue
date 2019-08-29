<template>
  <div>
    <v-toolbar >
      <v-toolbar-title class="judul"><router-link to="/home"><i class="fab fa-stack-overflow"></i> HacktivOverflow</router-link></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text ><router-link to="/login">Signin</router-link></v-btn>
        <v-btn text><router-link to="/register">Signup</router-link></v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  components: {
  },
methods: {
}
}
</script>
<style>
a {
  text-decoration: none;
}
.judul {
  font-family: 'Open Sans', sans-serif;
}
</style>
