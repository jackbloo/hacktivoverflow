<template>
  <div class="all">
    <div class="pp">
      <div>
        <h1>My Questions</h1>
      </div>
      <div class="jumlah">
        <p>{{myQ.length}} questions</p>
      </div>
    </div>
    <div class="ba" v-if="myQ.length !== 0">
      <myboxes></myboxes>
    </div>
    <div v-else>
      <h1 class="oo">Please Create Question</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import myboxes from '../components/myboxes'
export default {
    components: {
        myboxes
    },
    computed: mapState(["myQ"]),
    created(){
      this.$store.dispatch('getMyQuestions')
    }
};
</script>

<style>
.pp{
  height: 25%;
  padding: 5%;
  border-bottom: 1px solid #0002;
  margin-bottom: 10%;
}
.ba {
  height: 75%;
}
.all {
  height: 100%;
}
.oo {
  text-align: center;
}
</style>