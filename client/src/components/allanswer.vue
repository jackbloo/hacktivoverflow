<template>
  <div>
    <div class="box" v-for="(q,i) in oneQ.answer" :key="i">
      <div class="kiri">
        <div class="satu">
          <button @click="upAnswer(q._id)">
            <i class="far fa-thumbs-up"></i>
          </button>
        </div>
        <div class="satu">{{q.upvote-q.downvote}}</div>
        <div class="satu">
          <button @click="downAnswer(q._id)">
            <i class="far fa-thumbs-down"></i>
          </button>
        </div>
      </div>
      <div class="kanan">
        <div class="up">
          <div class="juduls">
            <h4 class="beda">{{q.jawaban}}</h4>
          </div>
        </div>
        <div class="turun">
          <div class="author">{{q.UserId.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["oneQ"]),
  methods: {
    upAnswer(id) {
      this.$store.dispatch("answerUp", id);
      this.$store.dispatch("getOneQuestion", id);
    },
    downAnswer(id) {
      this.$store.dispatch("answerDown", id);
      this.$store.dispatch("getOneQuestion", id);
    }
  },
  created() {
    this.$store.dispatch("getOneQuestion", this.$route.params.id);
  }
};
</script>

<style>
.box {
  border-bottom: 2px solid #0002;
  height: 15%;
  display: flex;
  flex-direction: row;
}
.jumlah {
  margin-top: 2%;
}
.kiri {
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 5%;
}
.kanan {
  width: 80%;
  padding: 2%;
}
.satu {
  height: 33.3%;
  padding: 5%;
}
.viewdalam {
  text-align: center;
}
.vo {
  height: 50%;
}
.te {
  height: 50%;
}
.up {
  height: 60%;
  display: flex;
  flex-direction: column;
}
.turun {
  height: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.juduls {
  height: 50%;
}
.isinya {
  height: 50%;
}
.para {
  font-size: 100%;
}
h4 {
  text-align: justify;
}
p {
  text-align: justify;
}
.tagg {
  width: 70%;
}
.author {
  width: 30%;
}
.beda {
  cursor: default;
}
</style>