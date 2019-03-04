<template>
  <div class="card">
    <div class="ml-4 mr-4 mt-4 mb-4 bordered-tb">
      <div class="row">
        <div class="col-md-12">
          <nav class="sidebar-nav active text-left">
            <ul id="sidebarnav" class="in">
              <li class="ml-2">
                <div class="input-group">
                  <a href="#">Popular</a>
                </div>
              </li>
              <li class="ml-2">
                <div class="input-group">
                  <a href="#">New arrivals</a>
                </div>
              </li>
              <li class="ml-2">
                <div class="input-group">
                  <a href="#">Best sellers</a>
                </div>
              </li>
              <li class="ml-2">
                <div class="input-group">
                  <a href="#">Special offers</a>
                </div>
              </li>
              <li class="ml-2">
                <div class="input-group">
                  <a href="#">Coming soon</a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-lg-6">
          <div class="row md-image-c">
            <div class="col-md-6 md-image">
              <img src="../../assets/images/gallery/i1.png" />
            </div>
            <div class="col-md-6 md-image">
              <img src="../../assets/images/gallery/i2.png" />
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 big-image">
              <img src="../../assets/images/gallery/i3.png" />
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-12 big-image">
              <img src="../../assets/images/gallery/i4.png" />
            </div>
          </div>
          <div class="row md-image-c">
            <div class="col-md-6 md-image">
              <img src="../../assets/images/gallery/i2.png" />
            </div>
            <div class="col-md-6 md-image">
              <img src="../../assets/images/gallery/i1.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="row no-gutters mb-4">
        <div class="col-md-4">
          <div class="gray-box box-men row vn-btn">
              <a href="#" class=""></a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="gray-box box-women row vn-btn">
              <a href="#" class=""></a>
          </div>
        </div>
        <div class="col-md-4">
          <div class="gray-box box-you row vn-btn">
              <a href="#" class=""></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomePage",

    mounted() {
      utils.log("[Home/Index] loading index... ");
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vn-btn a{
    background-image: url("../../assets/images/background/vn-btn.png");
    margin-top:150px;
    margin-left:230px;
    width: 79px;
    height: 26px;
  }

  .vn-btn a:hover{
    background-image: url("../../assets/images/background/vn-btn-h.png");
  }

  .gray-box {
    min-height: 200px;
    background-color: #f8f8f8;
    margin-left: 20px;
    margin-right: 20px;
        background-attachment: initial;
    background-repeat: no-repeat;
    background-position: center;
  }

  .box-men{
    background-image: url("../../assets/images/background/men.png");
  }

    .box-women{
    background-image: url("../../assets/images/background/women.png");
  }

    .box-you{
    background-image: url("../../assets/images/background/you.png");
  }

  .sidebar-nav {
    background-color: #fff;
  }

  .bordered-tb {
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
  }
</style>