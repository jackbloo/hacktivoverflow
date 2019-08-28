<template>
  <div>
    <div class="title">
      <div>
        <h1>My Questions</h1>
      </div>
      <div class="jumlah">
        <p>{{myQ.length}} questions</p>
      </div>
    </div>
    <div class="down">
      <myboxes></myboxes>
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
.title {
  height: 15%;
  border-bottom: 2px solid #0002;
  display: flex;
  flex-direction: column;
  padding: 5%;
}
.down {
  height: 75%;
  display: flex;
  flex-direction: column;
}
</style>