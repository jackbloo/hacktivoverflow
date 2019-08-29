<template>
  <div class="all">
    <div class="pp">
      <div>
        <h1>My Answers</h1>
      </div>
      <div class="jumlah">
        <p>{{myA.length}} answers</p>
      </div>
    </div>
    <div class="ba" v-if="myA.length !== 0">
      <Answerboxes></Answerboxes>
    </div>
    <div v-else>
      <h1 class="oo">Please Create Answer</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Answerboxes from '../components/Answerboxes.vue'
export default {
    components: {
        Answerboxes
    },
    computed: mapState(["myA"]),
    created(){
      this.$store.dispatch('getMyAnswers')
    }
};
</script>

<style>
.pp{
  height: 25%;
  padding: 5%;
  border-bottom: 1px solid #0002;
  margin-bottom: 3%;
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