<template>
  <div>
      <v-chip small @click="toTag(tak)">{{tak}}</v-chip>
  </div>
</template>

<script>
export default {
props:['tak'],
methods: {
  toTag(name){
    this.$store.dispatch('toTag', name)
    this.$router.push('/overflow/byTags').catch(err =>{})
  }
}
}
</script>

<style>

</style>