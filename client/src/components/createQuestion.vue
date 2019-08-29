<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on" text>Create Question</v-btn>
      </template>
      <v-card>
        <form @submit.prevent="addQuestion">
          <v-card-title>
            <span class="headline">Create Question</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Title" v-model="title" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="Question" v-model="pertanyaan" required></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-combobox
                    multiple
                    v-model="select"
                    label="Tags"
                    append-icon
                    chips
                    deletable-chips
                    class="tag-input"
                  ></v-combobox>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false" type="submit">Create</v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data: () => ({
    dialog: false,
    select: [],
    title: "",
    pertanyaan: ""
  }),
  methods: {
    addQuestion() {
      let token = localStorage.getItem("access_token");
      Swal.fire({
        title: "Adding your question...",
        allowOutsideClick: () => !Swal.isLoading()
      });
      Swal.showLoading();
      axios({
        method: "POST",
        url: "http://18.191.103.187/question/create",
        headers: {
          token
        },
        data: {
          title: this.title,
          pertanyaan: this.pertanyaan,
          tagku: this.select
        }
      })
        .then(({ data }) => {
          Swal.close()
          Swal.fire("Success!","Your Question is Created!", "success");
          this.$store.dispatch("getQuestions");
          this.$store.dispatch("getMyQuestions");
        })
        .catch(err => {
          Swal.fire("Error!",err.message, "error");
        });
    }
  }
};
</script>