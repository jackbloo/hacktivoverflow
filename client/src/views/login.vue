<template>
  <v-app id="inspire">
    <navbarout></navbarout>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <span>Source</span>
                </v-tooltip>
                <v-tooltip right></v-tooltip>
              </v-toolbar>
              <v-form @submit.prevent="loginNow">
                <v-card-text>
                  <v-text-field
                    label="Email"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    v-model="email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn type="submit" color="primary">Login</v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import navbarout from "../components/navbarout";
import axios from "axios";
import Swal from "sweetalert2";
export default {
  components: {
    navbarout
  },
  data() {
    return {
      password: "",
      email: ""
    };
  },
  methods: {
    loginNow() {
      Swal.fire({
        title: "Loggin in...",
        allowOutsideClick: () => !Swal.isLoading()
      });
      Swal.showLoading();
      axios({
        method: "POST",
        url: "http://18.191.103.187/user/signin",
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          Swal.close();
          Swal.fire("Success!", "Your are logged in!", "success");
          localStorage.setItem("access_token", data.token);
          this.$router.push("/overflow/all").catch(()=>{});
          this.clear();
        })
        .catch(error => {
          let message =
            (error.response.data && error.response.data.message) ||
            "Failed to Login";
          Swal.fire("Error!", message, "error");
          this.clear();
        });
    },
    clear() {
      (password = ""), (email = "");
    }
  }
};
</script>

<style>
#inspire {
  background-image: url("https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80");
}
</style>
