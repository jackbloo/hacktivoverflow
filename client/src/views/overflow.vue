<template>
  <div class="homepage">
    <div>
      <navbarin></navbarin>
    </div>
    <div class="isi">
      <div class="left">
        <div class="side">
          <div class="quest">
            <router-link to="/overflow/myQuestions">
              <button @click="takeMine">My Questions</button>
            </router-link>
            <router-link to="/overflow/myAnswers">
              <button @click="takeMine">My Answers</button>
            </router-link>
          </div>
          <div>PUBLIC</div>
          <div class="list">
            <button>
              <router-link to="/overflow/all">
                <i class="fas fa-globe-europe"></i> Hacktiv Overflow
              </router-link>
            </button>
          </div>
        </div>
      </div>
      <div class="mid">
        <router-view></router-view>
      </div>
      <div class="right">
        <div class="tagging">
          Watched Tags
          <editTags></editTags>
          <div class="semuatag">
            <tags :tak="t" v-for="(t,i) in myT" :key="i"></tags>
          </div>
        </div>
        <div class="best">
          <h1>Top Questions</h1>
          <topQ></topQ>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbarin from "../components/navbarin";
import boxes from "../components/boxes";
import tags from "../components/tags";
import editTags from "../components/editTags";
import topQ from "../components/topQ";
import { mapState } from "vuex";
export default {
  components: {
    navbarin,
    boxes,
    tags,
    editTags,
    topQ
  },
  computed: mapState(["questions", "myT"]),
  methods: {
    takeMine() {
      this.$store.dispatch("getMyQuestions");
    }
  },
  created() {
    this.$store.dispatch("getQuestions");
    this.$store.dispatch("getMyTags");
    this.$store.dispatch("getTop10");
  }
};
</script>

<style>
.homepage {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.isi {
  height: 90%;
  display: flex;
  flex-direction: row;
  background-color: white;
}
.left {
  width: 20%;
  height: 100%;
}
.mid {
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.right {
  width: 20%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.side {
  height: 40%;
  margin-top: 20%;
  padding: 7%;
}
.quest {
  margin-bottom: 7%;
}
.list {
  margin-left: 10%;
}

.tagging {
  width: 100%;
  height: 40%;
  padding: 8%;
  margin-bottom: 10%;
}
.best {
  width: 100%;
  height: 60%;
  padding: 8%;
}
.semuatag {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.quest {
  display: flex;
  flex-direction: column;
}
</style>