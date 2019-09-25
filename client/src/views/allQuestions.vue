<template>
  <div class="aw">
    <div class="yaa">
      <div>
        <h1>All Questions</h1>
      </div>
      <div class="jumlah">
        <p>{{questions.length}} questions</p>
      </div>
    </div>
    <div class="down"  v-if="questions.length !== 0">
      <boxes></boxes>
    </div>
    <div v-else>
      <h1 class="oo">Please Create Question</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import boxes from "../components/boxes";
export default {
  components: {
    boxes
  },
  computed: mapState(["questions"]),
  created() {
    this.$store.dispatch("getQuestions");
  }
};
</script>

<style>
.aw {
  height:100%;
}
.yaa {
  height: 25%;
  padding: 5%;
  border-bottom: 1px solid #0002;
  margin-bottom: 1%;
}
.down {
  height: 75%;
  display: flex;
  flex-direction: column;
}

</style>