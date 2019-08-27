<template>
  <div class="homepage">
    <div>
      <navbarin></navbarin>
    </div>
    <div class="isi">
      <div class="left">
        <div class="side">
          <div class="quest">My Questions</div>
          <div>PUBLIC</div>
          <div class="list">
            <button>
              <i class="fas fa-globe-europe"></i> Hacktiv Overflow
            </button>
          </div>
        </div>
      </div>
      <div class="mid">
        <div class="title">
          <div>
            <h1>All Questions</h1>
          </div>
          <div class="jumlah">
              <p>18,127,731 questions</p>
          </div>
        </div>
        <div class="down">
            <boxes></boxes>
        </div>
      </div>
      <div class="right">halo</div>
    </div>
  </div>
</template>

<script>
import navbarin from "../components/navbarin";
import boxes from "../components/boxes"
export default {
  components: {
    navbarin,
    boxes
  }
};
</script>

<style>
.homepage {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.isi {
  height: 90%;
  display: flex;
  flex-direction: row;
}
.left {
  width: 20%;
  height: 90vh;
}
.mid {
  width: 60%;
  height: 90vh;
  border-left: 2px solid #0002;
  display: flex;
  flex-direction: column;
}
.right {
  width: 20%;
  height: 90vh;
}
.side {
  height: 40%;
  margin-top: 20%;
  padding: 7%;
}
.quest {
  margin-bottom: 7%;
}
.list {
  margin-left: 10%;
}
.title {
  height: 25%;
  border-bottom: 2px solid #0002;
  display: flex;
  flex-direction: column;
  padding: 5%;
}
.down {
  height: 75%;
  display: flex;
  flex-direction: column;
}

</style>