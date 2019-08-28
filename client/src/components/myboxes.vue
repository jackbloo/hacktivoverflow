<template>
  <div>
    <div class="boxku" v-for="(q,i) in myQ" :key="i">
      <div class="kiri">
        <div class="satu">
          <div class="vo">
            <p class="viewdalam">{{q.upvote.length - q.downvote.length}}</p>
          </div>
          <div class="te">
            <p class="viewdalam">votes</p>
          </div>
        </div>
        <div class="satu">
          <div class="vo">
            <p class="viewdalam">{{q.answer.length}}</p>
          </div>
          <div class="te">
            <p class="viewdalam">answer</p>
          </div>
        </div>
      </div>
      <div class="kanan">
        <div class="up">
          <div class="juduls">
            <h4 @click="moveDetail(q._id)">{{q.title}}</h4>
            <button><i class="fas fa-trash-alt"></i></button>
          </div>
          <div class="isinya">
            <p class="para">{{q.pertanyaan}}</p>
          </div>
        </div>
        <div class="turun">
          <div v-if="q.tags.length !== 0">
            <div class="tagg" v-for="(t,i) in q.tags" :key="i">
              <v-chip>{{t}}</v-chip>
            </div>
          </div>
          <div v-else>no tags</div>

          <div class="author">
            <p class="u">by:  {{q.UserId.name}}</p>
            <edit :idKu="q._id"></edit>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import edit from "../components/edit";
export default {
  components: {
    edit
  },
  computed: mapState(["myQ"]),
  methods: {
    moveDetail(id) {
      this.$router.push(`/overflow/${id}`);
      this.$store.dispatch("getOneQuestion", id);
    }
  }
};
</script>

<style >
.boxku {
  border-bottom: 2px solid #0002;
  height: 20%;
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
}
.kanan {
  width: 80%;
  padding: 1%;
}
.satu {
  height: 50%;
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
  height: 40%;
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
  flex-direction: row;
  justify-content: space-between;
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
  width: 60%;
}
.author {
  width: 40%;
  align-items: center;
}
.u {
  text-align: center;
}
</style>