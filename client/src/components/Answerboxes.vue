<template>
  <div>
    <div class="boxku" v-for="(q,i) in myA" :key="i">
      <div class="kiri">
        <div class="satu">
          <div class="vo">
            <p class="viewdalam">{{q.upvote.length - q.downvote.length}}</p>
          </div>
          <div class="te">
            <p class="viewdalam">votes</p>
          </div>
        </div>
      </div>
      <div class="kanan">
        <div class="up">
          <div class="juduls">
            <h4>{{q.title}}</h4>
            <div class="hoho">
              <editAnswer :qId="q._id"></editAnswer>
            </div>
          </div>
          <div class="isinya">
            <p class="para">{{q.jawaban}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import editAnswer from "../components/editAnswer";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  components: {
    editAnswer
  },
  computed: mapState(["myA"]),
  methods: {
  }
};
</script>

<style >
.boxku {
  border-bottom: 2px solid #0002;
  height: 150px;
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
.hoho {
  width: 25%;
  margin-right: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.hoha{
  width: 50px;
}
</style>