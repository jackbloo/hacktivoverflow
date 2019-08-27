<template>
  <div>
    <div class="luar">
      <navbarout></navbarout>
      <div class="awal">
        <div class="dalam">
          <h1>Welcome To Hacktivoverflow</h1>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import navbarout from '../components/navbarout.vue'
export default {
  components: {
    navbarout
  },
};
</script>

<style scoped>
.awal {
  display: flex;
  justify-content: center;
  height: 95%;
  width: 100%;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80");
}
h1 {
  color: black;
}
.luar {
  height: 100vh;
}
</style>
