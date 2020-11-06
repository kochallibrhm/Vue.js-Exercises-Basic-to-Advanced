<template>
  <div>
    <h3 class="text-center">Added Products</h3>
    <hr/>
    <div class="row product-container">

        <product-list-item v-for="product in productList" :key="product.id">
            <img
            class="card-img-top" :src="product.selectedImage" :alt="product.name"/>
            <div class="card-body">
                <h5 class="card-title"> {{product.name}} </h5>
                <small> <strong>Number : </strong> {{product.number}} </small>
                <br />
                <small> <strong>Price : </strong> {{product.price}} </small>
                <br />
                <small> <strong>Total : </strong> {{product.totalprice}} </small>
            </div>
        </product-list-item>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main';
import ProductListItem from "./ProductListItem"

export default {
    components : {
        productListItem : ProductListItem,
    },
    data(){
        return{
        productList: [],
        }
    },
    created(){
        if(this.productList.length < 10){
            
            eventBus.$on("ProductAdded", (product) => {
            this.productList.push(product);
            eventBus.$emit("ProductCounter", this.productList.length);
            })  
        }
    }
};
</script>