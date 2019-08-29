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
      axios({
          method:'PATCH',
          url:'http://localhost:3000/user/addTags',
          headers: {
              token
          },
          data:{
              tagKu:this.select
          }
      }).then(({data})=>{
          this.$store.dispatch('getMyTags')
      }).catch(err => {
          console.log(err)
      })
    },
    myTags() {
      let token = localStorage.getItem("access_token");
      axios({
        method: "GET",
        url: "http://localhost:3000/user/myTags",
        headers: {
          token
        }
      }).then(({ data }) => {
       this.select = data.tags
      });
    }
  }
};
</script>