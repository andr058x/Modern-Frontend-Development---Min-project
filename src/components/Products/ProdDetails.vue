<template>
<b-modal id="prodDetails" size="lg" :title="model ? model.Description : ''">
    <div class="container">
    <br>
<div class="card border-0">
	<div class="row">
		<aside class="col-sm-4">
            <article class="gallery-wrap"> 
            <div class="img-big-wrap">
            <div> <a href="#"><img :src="model ? model.Image : ''"></a></div>
            </div>
            <div class="img-small-wrap">
            <div class="item-gallery"> <img src="https://via.placeholder.com/100x100"> </div>
            <div class="item-gallery"> <img src="https://via.placeholder.com/100x100"> </div>
            <div class="item-gallery"> <img src="https://via.placeholder.com/100x100"> </div>
            <div class="item-gallery"> <img src="https://via.placeholder.com/100x100"> </div>
            </div>
            </article>
		</aside>
		<aside class="col-sm-4">
      <article class="card-body m-0 pt-0 pl-5 mt-2">
          <h3 class="title text-uppercase">{{model ? model.Description : ''}}</h3>
          <div class="rating">
              <div class="stars">
                  <span class="fa fa-star" v-for="s in (model ? model.Stars : [])" :key="s.$index" v-bind:class="{ 'text-warning': s == true }"></span>
                  <span class="review-no ml-2">(41 opinions)</span>
              </div>
          </div>
          <div class="mb-3 mt-3"> 
                  <span class="h7 text-success">A log.</span>
          </div>						
          <div class="mb-3 mt-3"> 
              <span class="price-title">Price :</span>
                  <span class="price color-price-waanbii ml-1" v-html="formatCurrency(model ? model.ActualPrice : 0, { precision: 2 })"></span>
          </div>
          <div class="mb-3 mt-3" v-if="model ? model.PreSaledPrice : false"> 
              <span class="price-title">Original :</span>
                  <span class="price color-price-linethrought ml-1" v-html="formatCurrency(model ? model.PreSaledPrice : 0, { precision: 2 })"></span>
          </div>
          <dl class="item-property">
          <dt>Description</dt>
          <dd><p>Here goes description enhanced rebates, but they do occaecat

            labor and in pain, and vitality, so that at some important things to. Over the years, I will come,

            nostrud exercise any school district </p></dd>
          </dl>
          <dl class="param param-feature">
          <dt>Weight</dt>
          <dd>200g</dd>
          </dl>
      </article>
		</aside>
		<aside class="col-sm-4">
      <article class="card-body m-0 pt-0 pl-5">
        <div class="row mt-2">
          <dl class="param param-inline">
            <dt>Quantity: </dt>
            <dd>
              <select class="form-control form-control-sm" style="width:70px;">
                <option> 1 </option>
                <option> 2 </option>
                <option> 3 </option>
                <option> 4 </option>
                <option> 5 </option>
                <option> 6 </option>
                <option> 7 </option>
                <option> 8 </option>
                <option> 9 </option>
                <option> 10 </option>
              </select>
            </dd>
          </dl>
        </div>
        <div class="row">
            <button class="btn btn-md color-box-waanbii" type="button"> <i class="fa fa-shopping-cart"></i> 
             </button>
        </div>
        <div class="row mb-4 mt-4">
            <button class="btn btn-md color-box-waanbii" type="button"> <i class="fa fa-shopping-bag"></i> 
             </button>
        </div>
            <div class="row mb-4 mt-4">
            <button class="btn btn-md btn-success" type="button"><i class="fa fa-heart fa-beat"></i></button>
        </div>
        <hr class="m-0 p-0">
        <div class="row mb-4 mt-4">
          There are 3 copies of the products.
        </div>
      </article>
		</aside>
	</div>
</div>


</div>
<!--container.//-->
</b-modal>
</template>
<script>
import { formatCurrency } from "@/helpers";

export default {
name: "ProdDetails",
  props: {
    model: {
      type: Object,
      default: function() {
        return {
        };
      }
    }
  },
  mounted(){
    utils.log("[Products/Details] mounted. ");
  },
  methods: {
    formatCurrency
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gallery-wrap .img-big-wrap img {
    height: 326px;
    width: 240px;
   /* width: auto; */
    display: inline-block;
    cursor: zoom-in;
}

.gallery-wrap .img-small-wrap .item-gallery {
    width: 70px;
    height: auto;
    margin: 7px 2px;
    display: inline-block;
    overflow: hidden;
}

.gallery-wrap .img-small-wrap {
    text-align: center;
}
.gallery-wrap .img-small-wrap img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 4px;
    /*cursor: zoom-in;*/
}
.price-title{
    font-weight: 700;
}
.price{
    font-size: 24px;
    line-height: 31px;
    text-transform: uppercase;
    max-height: 66px;
    overflow: hidden;
    font-family: 'Open Sans',Arial,sans-serif;
    font-weight: 700;
    width: 100%;
    padding: 0;
    float: none;
}
.color-price-waanbii{
    color: #FA3A11; 
}
.color-price-linethrought{
  color:#909090;
  text-decoration:line-through;
  font-size: 20px;
}
.color-box-waanbii{
    background: #FD6342; 
    color:white;
    max-width: 150px;
}

.fa-beat {
  animation:fa-beat 5s ease infinite;
}
@keyframes fa-beat {
  0% {
    transform:scale(1);
  }
  5% {
    transform:scale(1.25);
  }
  20% {
    transform:scale(1);
  }
  30% {
    transform:scale(1);
  }
  35% {
    transform:scale(1.25);
  }
  50% {
    transform:scale(1);
  }
  55% {
    transform:scale(1.25);
  }
  70% {
    transform:scale(1);
  }
}


</style>