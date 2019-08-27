<template>
  <v-app>
    <router-view/>
  <footMe></footMe>  
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
    //
  }),
};
</script>
