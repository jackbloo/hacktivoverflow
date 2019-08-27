<template>
  <div class="box">
    <div class="kiri">
      <div class="satu">
        <div class="vo">
          <p class="viewdalam">0</p>
        </div>
        <div class="te">
          <p class="viewdalam">votes</p>
        </div>
      </div>
      <div class="satu">
        <div class="vo">
          <p class="viewdalam">0</p>
        </div>
        <div class="te">
          <p class="viewdalam">answer</p>
        </div>
      </div>
    </div>
    <div class="kanan">
        <div class="up">
            <div class="juduls">
            <h4>Load Data from Scrolling to bottom last cell in UICollectionView Calling API with Activity Indicator </h4>
            </div>
            <div class="isinya">
                <p class="para"> I am using UICollectionView in my project. I am calling API to load data in that CollectionView. and I want to load more data when scrolling down to the bottom of UICollectionView with bottom Activity ...</p>
            </div>
        </div>
        <div class="down">
            <div class="tagg">

            </div>
            <div class="author">

            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.box {
  border-bottom: 2px solid #0002;
  height: 50%;
  display: flex;
  flex-direction: row;

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
    padding: 2%;
}
.satu {
    height:50%;
    padding: 5%;
}
.viewdalam {
    text-align: center;
}
.vo {
    height: 50%;
}
.te {
    height:50%;
}
.up {
    height: 70%;
    display: flex;
    flex-direction: column;
}
.down {
    height: 30%;
}
.juduls {
    height: 50%;
}
.isinya {
    height: 50%;
}
.para {
    font-size: 10px;
}
</style>