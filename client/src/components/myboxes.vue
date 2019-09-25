<template>
  <div>
    <div class="boxku mb-2" v-for="(q,i) in myQ" :key="i">
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
            <div class="hoho">
              <button class="hoha" @click="deleteQuestion(q._id)">
                <i class="fas fa-trash-alt"></i>
              </button>
              <edit :qId="q._id"></edit>
            </div>
          </div>
          <div class="isinya">
            <p class="para">{{q.pertanyaan}}</p>
          </div>
        </div>
        <div class="turun">
          <div class="oye" v-if="q.tags.length !== 0">
            <div class="tagg">
              <v-chip small v-for="(t,i) in q.tags" :key="i">{{t}}</v-chip>
            </div>
          </div>
          <div v-else>no tags</div>

          <div class="author">
            <p class="u">by: {{q.UserId.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import edit from "../components/edit";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  components: {
    edit
  },
  computed: mapState(["myQ"]),
  methods: {
    moveDetail(id) {
      this.$router.push(`/overflow/${id}`);
      this.$store.dispatch("getOneQuestion", id);
    },
    deleteQuestion(id) {
      let token = localStorage.getItem("access_token");
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      })
        .then(result => {
          if (result.value) {
            Swal.fire({
              title: "Deleting your question...",
              allowOutsideClick: () => !Swal.isLoading()
            });
            axios({
              method: "DELETE",
              url: `http://18.191.103.187/question/${id}`,
              headers: {
                token
              }
            }).then(({ data }) => {
              Swal.close();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              this.$store.dispatch("getMyQuestions");
            });
          }
        })
        .catch(err => {
          Swal.fire("Fail!", "Your Question is fail to be deleted!", "error");
        });
    }
  }
};
</script>

<style >
.boxku {
  height: 150px;
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
   width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.author {
  width: 100px;
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
</style>