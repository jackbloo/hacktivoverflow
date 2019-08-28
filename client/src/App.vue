<template>
  <v-app>
    <router-view/>
  <!-- <footMe></footMe>   -->
  </v-app>
</template>

<script>
import footMe from './components/footMe';

export default {
  name: 'App',
  components: {
    footMe,
  },
  data: () => ({
 
  }),
  created(){
    if(localStorage.getItem('access_token')){
      this.$router.push('/overflow/all')
    } else {
      this.$router.push('/home')
    }
  }
};
</script>
