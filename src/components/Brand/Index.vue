<template>
  <div>
    <div class="card brand-t-img mb-0">

    </div>
    <div class="card brand-img">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-lg-12 mt-2 mb-4 mt-4">
              <img src="../../assets/images/gallery/brand-i1.png" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 mt-2 mb-4">
              <img src="../../assets/images/gallery/brand-i2.png" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 mt-2 mb-4 brand-text">
              <h4>Lorem ipsum dolor sit amet</h4>
              <h5>consectetur adipisci elit</h5>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
              cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-lg-12 mb-4 mt-4 brand-text">
              <h4>Lorem ipsum dolor sit amet</h4>
              <h5>consectetur adipisci elit</h5>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
              cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 mb-4">
              <img src="../../assets/images/gallery/brand-i3.png" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 mb-4 brand-text">
              <h4>Lorem ipsum dolor sit amet</h4>
              <h5>consectetur adipisci elit</h5>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis
              suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 mb-4">
              <img src="../../assets/images/gallery/brand-awards.png" />
            </div>
          </div>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Brand"
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media(min-width:1220px) {
    .brand-t-img {
      background-image: url("../../assets/images/background/brand-top.png");
      min-height: 350px;
      margin-top: 0px;
      background-position: center;
      background-repeat: no-repeat;
    }

    .brand-img img {
      max-width: 400px;
    }
  }

  @media(max-width:1219px) {
    .brand-img img {
      max-width: 200px;
    }

    .brand-t-img {
      display: none;
    }
  }

  @media(max-width:761px) {
    .brand-img img {
      max-width: 200px;
      margin-left: 30px;
    }

    .brand-text {
      margin-left: 30px;
      margin-right: 30px;
    }
  }


  h4,
  h5 {
    text-transform: uppercase;
  }
</style>