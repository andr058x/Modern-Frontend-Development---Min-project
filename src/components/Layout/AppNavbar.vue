<template>
  <aside class="left-sidebar">
    <!-- Sidebar scroll -->
    <div class="container-fluid">
      <div class="scroll-sidebar">
        <!-- Sidebar navigation -->
        <nav class="sidebar-nav active text-right">
          <ul id="sidebarnav" class="in">
            <router-link
              :to="{ name: 'layout' }"
              class=""
              tag="li">
              <a class="has-arrow" aria-expanded="false">
                <i class="fa fa-home mr-2"></i>
                <span class="hide-menu">Home </span>
              </a>
            </router-link>
            <router-link
              :to="{ name: 'brand' }"
              class=""
              tag="li">
              <a class="has-arrow" aria-expanded="false">
                <i class="fa fa-align-justify mr-2"></i>
                <span class="hide-menu">Brand </span>
              </a>
            </router-link>
            <router-link
              :to="{ name: 'products' }"
              class=""
              tag="li">
              <a class="has-arrow" aria-expanded="false">
                <i class="fa fa-shopping-bag mr-2"></i>
                <span class="hide-menu">Shop </span>
              </a>
            </router-link>
            <router-link
              :to="{ name: 'signUp' }"
              class=""
              tag="li">
              <a class="has-arrow" aria-expanded="false">
                <i class="fa fa-key mr-2"></i>
                <span class="hide-menu">SignUp </span>
              </a>
            </router-link>
            <li class="ml-2">
              <div class="input-group">
                <input placeholder="Search"
                      type="text"
                      class="form-control"
                      aria-label="filtro"
                      aria-describedby="search" />   
                <div class="input-group-append">
                  <span class="input-group-text">
                  <i class="fa fa-search"></i>
                </span>
              </div>
             </div>         
            </li>
          </ul>
        </nav>
        <!-- End Sidebar navigation -->
      </div>
    </div>
    <!-- End Sidebar scroll -->
  </aside>
</template>

<script>

export default {

};
</script>

<style lang="scss" scoped>
.sidebar-nav > ul > li > a {
  > i {
    font-size: 1rem; // reset size
  }
}
</style>
