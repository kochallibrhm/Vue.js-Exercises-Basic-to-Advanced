<template>
  <div class="container">
    <h1 class="text-center">Product Addition</h1>
    <hr>
    <add-product-comp></add-product-comp>
    <br><br>
    <progress-comp></progress-comp>
    <br><br>
    <product-list-comp></product-list-comp>

  </div>


</template>

<script>
  import AddProduct from "./components/AddProduct"
  import ProductList from "./components/ProductList"
  import Progress from "./components/Progress"

  export default {

    components : {
      addProductComp : AddProduct,
      productListComp : ProductList,
      progressComp : Progress,
    },

    data() {
      return {
        
      }
    },
    methods : {

    }
  }
</script>

<style>
  body {
    background-color: aliceblue;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .card{
    margin-right: 5px;
    margin-bottom: 5px;
  }

  .card:last-child{
    margin-right: 0px;
  }

  .col-md-2{
    max-width: 15.666667%!important;
  }

  .product-container{
    margin-left: 15px;
  }

</style>

