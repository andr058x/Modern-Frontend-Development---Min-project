<template>
<div>
<div class="container">
    <h3 class="h3">Products</h3>
    <div class="row">
        <div class="col-md-3 col-sm-6" v-for="item in items" :key="item.$index">
            <!-- <pre>{{item}}</pre> -->
            <div class="product-grid">
                <div class="product-image">
                    <a href="#">
                        <img class="pic-1" :src="item.Image">
                        <img class="pic-2" :src="item.SlideImage">
                    </a>
                    <ul class="social">
                        <li><a v-b-modal.prodDetails @click="openDetails(item)"><i class="fa fa-search"></i></a></li>
                        <li><a href="#"><i class="fa fa-shopping-bag"></i></a></li>
                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                    <span v-if="item.IsNew" class="product-new-label">New</span>
                </div>
                <div class="product-content">
                    <h3 class="title"><a href="#">{{item.Description}}</a></h3>
                    <div class="price">
                        <span v-html="formatCurrency(item.ActualPrice, { precision: 2 })"></span>
                        <span class="linethrought ml-1" v-if="item.PreSaledPrice"
                            v-html="formatCurrency(item.PreSaledPrice, { precision: 2 })"></span>
                    </div>
                    <ul class="rating">
                        <li class="fa fa-star" v-for="s in item.Stars" :key="s.$index" v-bind:class="{ 'disable': s == false }" />
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
    <prod-details :model="selectedItem" />
</div>
</template>

<script>
import { formatCurrency } from "@/helpers";
import { SHOP_PRODUCTS } from "@/config";
import ProdDetails from "./ProdDetails.vue";

export default {
  components: {
    ProdDetails
  },
  data() {
    return{
      selectedItem : null,
      items : SHOP_PRODUCTS.ProductList
    }
  },
  methods: {
    formatCurrency,
    openDetails(item){
      this.selectedItem = item;
    }
  },

  mounted(){
    utils.log("[Products/List] mounted. ");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3.h3{text-align:center;margin:1em;text-transform:capitalize;font-size:1.7em;}

.product-grid{font-family:Roboto,sans-serif;text-align:center;position:relative;z-index:1}
.product-grid:before{content:"";height:81%;width:100%;background:#fff;border:1px solid rgba(0,0,0,.1);opacity:0;position:absolute;top:0;left:0;z-index:-1;transition:all .5s ease 0s}
.product-grid:hover:before{opacity:1;height:100%}
.product-grid .product-image{position:relative}
.product-grid .product-image a{display:block}
.product-grid .product-image img{width:100%;height:auto}
.product-grid .pic-1{opacity:1;transition:all .5s ease-out 0s}
.product-grid:hover .pic-1{opacity:0}
.product-grid .pic-2{position:absolute;top:0;left:0;opacity:0;transition:all .5s ease-out 0s}
.product-grid:hover .pic-2{opacity:1}
.product-grid .social{width:180px;padding:0;margin:0 auto;list-style:none;opacity:0;position:absolute;right:0;left:0;bottom:-23px;transform:scale(0);transition:all .3s ease 0s}
.product-grid:hover .social{opacity:1;transform:scale(1)}
.product-grid:hover .product-discount-label,.product-grid:hover .product-new-label,.product-grid:hover .title{opacity:0}
.product-grid .social li{display:inline-block}
.product-grid .social li a{color:#e67e22;background:#fff;font-size:18px;line-height:50px;width:50px;height:50px;border:1px solid rgba(0,0,0,.1);border-radius:50%;margin:0 2px;display:block;transition:all .3s ease 0s}
.product-grid .social li a:hover{background:#e67e22;color:#fff}
.product-grid .product-discount-label,.product-grid .product-new-label{background-color:#e67e22;color:#fff;font-size:17px;padding:2px 10px;position:absolute;right:10px;top:10px;transition:all .3s}
.product-grid .product-content{z-index:-1;padding:15px;text-align:left}
.product-grid .title{font-size:14px;text-transform:capitalize;margin:0 0 7px;transition:all .3s ease 0s}
.product-grid .title a{color:#414141}
.product-grid .price{color:#000;font-size:16px;letter-spacing:1px;font-weight:600;margin-right:2px;display:inline-block}
.product-grid .price span.linethrought{color:#909090;font-size:14px;font-weight:500;letter-spacing:0;text-decoration:line-through;text-align:left;display:inline-block;margin-top:-2px}
.product-grid .rating{padding:0;margin:-22px 0 0;list-style:none;text-align:right;display:block}
.product-grid .rating li{color:#ffd200;font-size:13px;display:inline-block}
.product-grid .rating li.disable{color:#dcdcdc}
@media only screen and (max-width:1200px){.product-grid .rating{margin:0}
}
@media only screen and (max-width:990px){.product-grid{margin-bottom:30px}
.product-grid .rating{margin:-22px 0 0}
}
@media only screen and (max-width:359px){.product-grid .rating{margin:0}
}

</style>