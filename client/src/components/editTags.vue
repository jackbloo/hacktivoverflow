<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <button v-on="on" @click="myTags">Edit</button>
      </template>
      <v-card>
        <form @submit.prevent="editTags">
          <v-card-title>
            <span class="headline">Edit Tags</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
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
            <v-btn color="blue darken-1" text @click="dialog = false" type="submit">Edit Tags</v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import Swal from "sweetalert2";
export default {
  data: () => ({
    dialog: false,
    select: [],
    title: "",
    pertanyaan: ""
  }),
  computed: mapState(["myT"]),
  methods: {
    editTags() {
      let token = localStorage.getItem("access_token");
      Swal.fire({
        title: "Updating your tags...",
        allowOutsideClick: () => !Swal.isLoading()
      });
      Swal.showLoading();
      axios({
        method: "PATCH",
        url: "http://18.191.103.187/user/addTags",
        headers: {
          token
        },
        data: {
          tagKu: this.select
        }
      })
        .then(({ data }) => {
          Swal.close()
          Swal.fire("Success!","Your Tags is updated!", "success");
          this.$store.dispatch("getMyTags");
        })
        .catch(err => {
          Swal.fire("Error!",err.message, "error");
        });
    },
    myTags() {
      let token = localStorage.getItem("access_token");

      axios({
        method: "GET",
        url: "http://18.191.103.187/user/myTags",
        headers: {
          token
        }
      }).then(({ data }) => {
        this.select = data.tags;
      });
    }
  }
};
</script>