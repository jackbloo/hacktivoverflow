<template>
  <div>
    <div class="box mb-2" v-for="(q,i) in oneQ.answer" :key="i">
      <div class="kiri">
        <div class="satu">
          <button @click="upAnswer(q._id)">
            <i class="far fa-thumbs-up"></i>
          </button>
        </div>
        <div class="satu">{{q.upvote.length-q.downvote.length}}</div>
        <div class="satu">
          <button @click="downAnswer(q._id)">
            <i class="far fa-thumbs-down"></i>
          </button>
        </div>
      </div>
      <div class="kanan">
        <div class="up">
          <div class="juduls">
            <h1>{{q.title}}</h1>
            <p class="beda">{{q.jawaban}}</p>
          </div>
        </div>
        <div class="turun">
          <div class="author">by: {{q.UserId.name}}</div>
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
      let payload = {
        id,
        questionId: this.$route.params.id
      };
      this.$store.dispatch("answerUp", payload);
    },
    downAnswer(id) {
      let payload = {
        id,
        questionId: this.$route.params.id
      };
      this.$store.dispatch("answerDown", payload);
    }
  },
  created() {
    this.$store.dispatch("getOneQuestion", this.$route.params.id);
  }
};
</script>

<style>
.box {
  height: 15%;
  display: flex;
  flex-direction: row;
  -webkit-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 2px 5px 0px rgba(0, 0, 0, 0.75);
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
  display: flex;
  flex-direction: column;
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