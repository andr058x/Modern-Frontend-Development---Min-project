<template>
  <!-- <main class="container-fluid">
  <div class="pt-2">
    <router-view></router-view>
  </div>
</main> -->
  <div class="page-wrapper">
    <div class="container-fluid">
      <!-- <div v-bind:class="{'card mb-0' : routeName != 'home_section'}"> -->
      <div class="card mb-0" v-bind:class="{'header-bg' : routeName == 'home_section', 'header-nobg' : routeName != 'home_section'}">

        <div class="row">
          <div class="col-lg-3">
            <h3 class="ml-1 mt-1"><strong>AVENUE</strong> FASHION</h3>
          </div>
          <div class="col-lg-3">
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="dropdown col-md-3">
                <a data-toggle="dropdown" href="#" class="btn btn-default">Mens<i class="fa fa-angle-down ml-2"></i></a>
                <!-- Menu dropdown -->
                <ul class="dropdown-menu">
                  <li class="mb-2 ml-2">
                    <div class="row">
                      <div class="col-md-6">
                        <span><strong>Casuals</strong></span>
                      </div>
                      <div class="col-md-6">
                        <span><strong>Formal</strong></span>
                      </div>
                    </div>
                  </li>
                  <li class="ml-2">
                    <div class="row">
                      <div class="col-md-6">
                        <a href="#">Jackets</a>
                      </div>
                      <div class="col-md-6">
                        <a href="#">Jackets</a>
                      </div>
                    </div>
                  </li>
                  <li class="ml-2">
                    <div class="row">
                      <div class="col-md-6">
                        <a href="#">Hoodies & Swearshirts</a>
                      </div>
                      <div class="col-md-6">
                        <a href="#">Shirts</a>
                      </div>
                    </div>
                  </li>
                  <li class="ml-2">
                    <div class="row">
                      <div class="col-md-6">
                        <a href="#">Polo Shirts</a>
                      </div>
                      <div class="col-md-6">
                        <a href="#">Suits</a>
                      </div>
                    </div>
                  </li>
                  <li class="ml-2">
                    <div class="row">
                      <div class="col-md-6">
                        <a href="#">Sportswear</a>
                      </div>
                      <div class="col-md-6">
                        <a href="#">Trousers</a>
                      </div>
                    </div>
                  </li>
                  <li class="ml-2">
                    <div class="row">
                      <div class="col-md-6">
                        <a href="#">Trousers & Chions</a>
                      </div>
                      <div class="col-md-6">
                      </div>
                    </div>
                  </li>
                  <li class="ml-2">
                    <div class="row">
                      <div class="col-md-6">
                        <a href="#">T-Shirts</a>
                      </div>
                      <div class="col-md-6">
                      </div>
                    </div>
                  </li>
                  <li class="ml-2 mt-3 mr-2"><button class="banner-50"></button></li>
                </ul>
              </div>
              <div class="dropdown  col-md-3">
                <a data-toggle="dropdown" href="#" class="btn btn-default">Women<i class="fa fa-angle-down ml-2"></i></a>
                <!-- Menu dropdown -->
                <ul class="dropdown-menu">
                  <li class="mb-2 ml-2">
                    <div class="row">
                      <div class="col-md-6">
                        <span><strong>Casuals</strong></span>
                      </div>
                      <div class="col-md-6">
                        <span><strong>Formal</strong></span>
                      </div>
                    </div>
                  </li>
                  <li class="ml-2">
                    <div class="row">
                      <div class="col-md-6">
                        <a href="#">Jackets</a>
                      </div>
                      <div class="col-md-6">
                        <a href="#">Jackets</a>
                      </div>
                    </div>
                  </li>
                  <li class="ml-2">
                    <div class="row">
                      <div class="col-md-6">
                        <a href="#">Hoodies & Swearshirts</a>
                      </div>
                      <div class="col-md-6">
                        <a href="#">Shirts</a>
                      </div>
                    </div>
                  </li>
                  <li class="ml-2">
                    <div class="row">
                      <div class="col-md-6">
                        <a href="#">Polo Shirts</a>
                      </div>
                      <div class="col-md-6">
                        <a href="#">Suits</a>
                      </div>
                    </div>
                  </li>
                  <li class="ml-2">
                    <div class="row">
                      <div class="col-md-6">
                        <a href="#">Sportswear</a>
                      </div>
                      <div class="col-md-6">
                        <a href="#">Trousers</a>
                      </div>
                    </div>
                  </li>
                  <li class="ml-2">
                    <div class="row">
                      <div class="col-md-6">
                        <a href="#">Trousers & Chions</a>
                      </div>
                      <div class="col-md-6">
                      </div>
                    </div>
                  </li>
                  <li class="ml-2">
                    <div class="row">
                      <div class="col-md-6">
                        <a href="#">T-Shirts</a>
                      </div>
                      <div class="col-md-6">
                      </div>
                    </div>
                  </li>
                  <li class="ml-2 mt-3 mr-2"><button class="banner-50"></button></li>
                </ul>
              </div>
              <div class="dropdown  col-md-3">
                <a data-toggle="dropdown" href="#" class="btn btn-default">Local stores <i class="fa fa-angle-down ml-2"></i></a>
                <!-- Menu dropdown -->
                <ul class="dropdown-menu">
                  <li class="ml-2">
                    <div class="row">
                      <div class="col-md-6">
                        <a href="#">New York</a>
                      </div>
                      <div class="col-md-6">
                        <a href="#">Los Angeles</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="dropdown col-md-3">
                <a data-toggle="dropdown" href="#" class="btn btn-default">Look book<i class="fa fa-angle-down ml-2"></i></a>
                <!-- Menu dropdown -->
                <ul class="dropdown-menu">
                  <li class="ml-2">
                    <div class="row">
                      <div class="col-md-6">
                        <a href="#">Men</a>
                      </div>
                      <div class="col-md-6">
                        <a href="#">Women</a>
                      </div>
                    </div>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        routeName: ""
      }
    },
    watch: {
      $route(to, from) {
        this.routeName = to.name;
      }
    },
    mounted() {
      this.routeName = this.$router.currentRoute.name;
    }
  };
</script>
<style scoped>
  @media(min-width:1101px) {
    .page-wrapper {
      padding-bottom: 320px;
    }
  }

  @media(max-width:1100px) {
    .page-wrapper {
      padding-bottom: 520px;
    }
  }

  @media(max-width:764px) {
    .page-wrapper {
      padding-bottom: 920px;
    }
  }
</style>