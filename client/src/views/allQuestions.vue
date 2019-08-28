<template>
  <div>
    <div class="title">
      <div>
        <h1>All Questions</h1>
      </div>
      <div class="jumlah">
        <p>{{questions.length}} questions</p>
      </div>
    </div>
    <div class="down">
      <boxes></boxes>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import boxes from '../components/boxes'
export default {
    components: {
        boxes
    },
    computed: mapState(['questions']),
    created(){
      this.$store.dispatch('getQuestions')
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