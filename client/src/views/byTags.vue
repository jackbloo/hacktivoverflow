<template>
  <div class="aw">
    <div class="yaa">
      <div>
        <h1>By Tags</h1>
      </div>
      <div class="jumlah">
        <p>{{sameTags.length}} questions</p>
      </div>
    </div>
    <div class="baah"  v-if="sameTags.length !== 0">
      <TAGboxes></TAGboxes>
    </div>
    <div v-else>
      <h1 class="oo">No Question Matches with the following tag</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TAGboxes from "../components/TAGboxes";
export default {
  components: {
    TAGboxes
  },
  computed: mapState(["sameTags"]),
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
  margin-bottom: 10%;
}
.down {
  height: 75%;
  display: flex;
  flex-direction: column;
}
</style>