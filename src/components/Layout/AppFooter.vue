<template>
  <footer class="footer">
    <div class="container-fluid text-muted">
      <div class="row footer-box">
        <div class="col-md-2">
          <p><strong>INFORMATION</strong></p>
          <a href="#">The brand</a><br />
          <a href="#">Local stores</a><br />
          <a href="#">Customer service</a><br />
          <a href="#">Privacy & cookies</a><br />
          <a href="#">Site map</a><br />
        </div>
        <div class="col-md-2">
          <p><strong>WHY BUY FROM US</strong></p>
          <a href="#">Shipping & returns</a><br />
          <a href="#">Secure shopping</a><br />
          <a href="#">Testimonials</a><br />
          <a href="#">Award winning</a><br />
          <a href="#">Ethical training</a><br />
        </div>
        <div class="col-md-2">
          <p><strong>YOUR ACCOUNT</strong></p>
          <a href="#">Sign in</a><br />
          <a href="#">Register</a><br />
          <a href="#">View cart</a><br />
          <a href="#">View your lookbook</a><br />
          <a href="#">Track an order</a><br />
          <a href="#">Update information</a><br />
        </div>
        <div class="col-md-2">
          <p><strong>LOOKBOOK</strong></p>
          <a href="#">Latest posts</a><br />
          <a href="#">Men's lookbook</a><br />
          <a href="#">Women's lookbook</a><br />
          <a href="#">Lookbooks RSS feed</a><br />
          <a href="#">View your lookbook</a><br />
          <a href="#">Delete your lookbook</a><br />
        </div>
        <div class="col-md-2">
          <p><strong>CONTACT DETAILS</strong></p>
          Head Office. Avenue Fashion.
          180-182 Regent Street, London.
          Telephone: 0123-456-789
          Email: <a href="#">support@yourwebsite.com</a>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="box">
            <a href="#">
              <img class="" src="../../assets/images/gallery/award.png" />
            </a>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="boximglb">
            <a href="#"><i class="fa fa-facebook fa-lg mr-4"></i></a>
            <a href="#"><i class="fa fa-twitter fa-lg mr-4"></i></a>
            <a href="#"><i class="fa fa-instagram fa-lg mr-4"></i></a>
            <a href="#"><i class="fa fa-google-plus-square fa-lg"></i></a>
          </div>
        </div>
      </div>
      <div class="sub-footer">
        <div class="row">
          <div class="col-md-4">
              2016 Avenue fashion
          </div>
          <div class="col-md-3">

          </div>
          <div class="col-md-4">
            Designed by RobbyDesigns. Dev by LoremImpsum.com
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    name: "AppHeader",
    computed: {
      version() {
        return `${process.env.VUE_APP_VERSION} ${process.env.VUE_APP_ENV}`;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box img {
    max-width: 300px;
  }

  .boximglb {
    background-image: url("../../assets/images/gallery/bgsocial.png");
    width: 300px;
    padding-bottom: 45px;
    padding-top: 45px;
    color: white;
    text-align: center;
    margin: 10px auto 0 auto;
  }

  .boximglb a{
    color: white;
  }

  .sub-footer {
    height: 30px;
  }
</style>