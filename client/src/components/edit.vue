<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on" text :max-width="10"><i class="far fa-edit"></i></v-btn>
      </template>
      <v-card>
        <form @submit.prevent="editQuestion(idKu)">
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
                    :search-input.sync="search"
                    @keyup.tab="updateTags"
                    @paste="updateTags"
                  ></v-combobox>
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
export default {
    props: ['idKu'],
  data: () => ({
    dialog: false,
    select: [],
    items: [],
    search: "",
    title: "",
    pertanyaan: ""
  }),
  methods: {
    updateTags() {
      this.$nextTick(() => {
        this.select.push(...this.search.split(","));
        this.$nextTick(() => {
          this.search = "";
        });
      });
    },
    editQuestion(id) {
      let token = localStorage.getItem("access_token");
    //   axios({
    //     method: "POST",
    //     url: "http://localhost:3000/question/create",
    //     headers: {
    //       token
    //     },
    //     data: {
    //       title: this.title,
    //       pertanyaan: this.pertanyaan
    //     }
    //   })
    //     .then(({ data }) => {
    //       this.$store.dispatch("getQuestions");
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    },
    created(){
        console.log('masuk')
    }
  }
};
</script>