<template>
  <div>
    <div class="boxy" v-for="(q,i) in questions" :key="i">
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
          </div>
          <div class="isinya">
            <p class="para">{{q.pertanyaan}}</p>
          </div>
        </div>
        <div class="turun">
          <div v-if="q.tags.length !== 0">
            <div class="tagg" >
              <v-chip small v-for="(t,i) in q.tags" :key="i">{{t}}</v-chip>
            </div>
          </div>
          <div v-else>no tags</div>
          <div class="author">by: {{q.UserId.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["questions"]),
  methods: {
    moveDetail(id) {
      this.$router.push(`/overflow/${id}`);
      this.$store.dispatch("getOneQuestion", id);
    }
  }
};
</script>

<style>
.boxy {
  border-bottom: 2px solid #0002;
  height:160px;
  display: flex;
  flex-direction: row;
}
.kiri {
  width: 20%;
  display: flex;
  flex-direction: column;
}
.kanan {
  width: 80%;
  padding: 2%;
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
  cursor: grab;
}
p {
  text-align: justify;
}
.tagg {
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.author {
  width: 30%;
}
</style>