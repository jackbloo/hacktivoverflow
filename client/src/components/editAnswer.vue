<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on" text :max-width="10" @click="getOne(qId)">
          <i class="far fa-edit"></i>
        </v-btn>
      </template>
      <v-card>
        <form @submit.prevent="editAnswer(qId)">
          <v-card-title>
            <span class="headline">Edit Question</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Title" v-model="title" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Question" v-model="jawaban" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false" type="submit">Edit</v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import Swal from "sweetalert2"
export default {
  props: ["qId"],
  data: () => ({
    dialog: false,
    select: [],
    title: "",
    jawaban: ""
  }),
  methods: {
    editAnswer(id) {
      let token = localStorage.getItem("access_token");
      Swal.fire({
        title: "Updating your Answer...",
        allowOutsideClick: () => !Swal.isLoading()
      });
      Swal.showLoading();
      axios({
        method: "PATCH",
        url: `http://18.191.103.187/answer/update/${id}`,
        headers: {
          token
        },
        data: {
          title: this.title,
          jawaban: this.jawaban
        }
      })
        .then(({ data }) => {
            Swal.close()
            Swal.fire("Success!","Your Answer is Updated!", "success");
          this.$store.dispatch("getMyAnswers");
        })
        .catch(err => {
         Swal.fire("Error!",err.message, "error");
        });
    },
    getOne(id) {
      let token = localStorage.getItem("access_token");
      axios({
        method: "GET",
        url: `http://18.191.103.187/answer/mine/${id}`,
        headers: {
          token
        }
      }).then(({ data }) => {
        this.title = data.data.title;
        this.jawaban = data.data.jawaban;
      });
    }
  }
};
</script>