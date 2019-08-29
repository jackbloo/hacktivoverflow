<template>
  <div class="mencakup">
    <div class="atas">
      <div class="l">
        <div class="dlm">
          <button @click="upvoting(oneQ._id)">
            <i class="far fa-thumbs-up"></i>
          </button>
        </div>
        <div class="dlm">{{oneQ.upvote.length - oneQ.downvote.length}}</div>
        <div class="dlm">
          <button @click="downvoting(oneQ._id)">
            <i class="far fa-thumbs-down"></i>
          </button>
        </div>
      </div>
      <div class="r">
        <div class="u">
          <div class="jud">
            <h3>{{oneQ.title}}</h3>
          </div>
          <div class="is">
            <p>{{oneQ.pertanyaan}}</p>
          </div>
        </div>
        <div class="d">
          <div class="ri">
            <div v-if="oneQ.tags.length !==0">
              <div>
                <v-chip small v-for="(o,k) in oneQ.tags" :key="k">{{o}}</v-chip>
              </div>
            </div>
            <div v-else>no tags</div>
          </div>
          <div class="nan">by: {{oneQ.UserId.name}}</div>
        </div>
      </div>
    </div>
    <div class="reply">
      <v-col cols="12">
        <form @submit.prevent="addReply(oneQ._id)">
          <textarea
            name
            id
            cols="15"
            rows="1"
            placeholder="title"
            style="border: 1px solid black;"
            v-model="title"
          ></textarea>
          <v-textarea
            v-model="jawaban"
            solo
            name="input-7-4"
            label="Insert Answer"
            :full-width="true"
          ></v-textarea>
          <v-btn color="primary" text :max-width="10" type="submit">reply</v-btn>
        </form>
      </v-col>
    </div>
    <div class="ooo">
      <div v-if="oneQ.answer.length !== 0 ">
        <allanswer></allanswer>
      </div>
      <div v-else>
        <h1 class="ans">No Answer</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import allanswer from "../components/allanswer";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  components: {
    allanswer
  },
  data() {
    return {
      jawaban: "",
      title: ""
    };
  },
  computed: mapState(["oneQ"]),
  methods: {
    upvoting(id) {
      this.$store.dispatch("upvoteQ", id);
      this.$store.dispatch("getOneQuestion", id);
    },
    downvoting(id) {
      this.$store.dispatch("downvoteQ", id);
      this.$store.dispatch("getOneQuestion", id);
    },
    addReply(id) {
      let token = localStorage.getItem("access_token");
      Swal.fire({
        title: "Adding your reply...",
        allowOutsideClick: () => !Swal.isLoading()
      });
      Swal.showLoading();
      axios({
        method: "POST",
        url: "http://18.191.103.187/answer/create",
        headers: {
          token
        },
        data: {
          jawaban: this.jawaban,
          questionId: id,
          title: this.title
        }
      })
        .then(({ data }) => {
          Swal.close()
          Swal.fire("Success!","Your Reply is Created!", "success");
          this.$store.dispatch("getOneQuestion", id);
        })
        .catch(err => {
          Swal.fire("Error!",err.message, "error");
        });
    }
  },
  created() {
    this.$store.dispatch("getOneQuestion", this.$route.params.id);
  }
};
</script>

<style>
h3 {
  text-align: left;
}
.mencakup {
  width: 100%;
  height: 100%;
  border-left: 2px solid #0002;
}
.baw {
  height: 65%;
  display: flex;
  flex-direction: column;
}
.atas {
  height: 40%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #0002;
}
.l {
  width: 20%;
  padding: 5%;
}
.r {
  height: 100%;
  width: 80%;
  padding: 1%;
  display: flex;
  flex-direction: column;
}
.dlm {
  width: 33.3%;
}
.u {
  height: 20%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20%;
}
.d {
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.jud {
  height: 50%;
  padding: 5%;
  margin-bottom: 1%;
}
.is {
  height: 50%;
  padding: 5%;
}
.ans {
  text-align: center;
}
.ri {
  width: 60%;
}
.nan {
  width: 40%;
}
.reply {
  width: 100%;
  height: 50%;
  border-bottom: 1px solid #0002;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>