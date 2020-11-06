<template>
    <div>
        <div class="row">
        <div class="card offset-2 col-md-3">
            <div class="card-body tex-center d-flex align-items-center flex-column">
            <img height="128" class="img-responsive text-center mb-3"
                :src="product.selectedImage == null ? '/src/assets/default.png' : product.selectedImage">
            <input ref="file" type="file" style="display: none;" @change="onChange($event)" class="form-control">
            <button class="btn btn-outline-secondary " type="button" @click="$refs.file.click()">Select Image</button>
            </div>
        </div>
        <div class="col-md-5">
            <div class="col-md-11 card">
            <div class="card-body">
                <div class="form-group">
                <label>Product Name</label>
                <input v-model="product.name" type="text" class="form-control" placeholder="Enter a name">
                </div>
                <div class="row">
                <div class="form-group col-md-6">
                    <label>Number of Product</label>
                    <input v-model="product.number" type="text" class="form-control" placeholder="Enter number">
                </div>
                <div class="form-group col-md-6">
                    <label>Price</label>
                    <input v-model="product.price" type="text" class="form-control" placeholder="Enter price">
                </div>
                </div>
                <button @click="addProduct" class="btn btn-outline-info btn-block">Add!</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import {eventBus} from "../main"
export default {
    data(){
        return{
        product : {
            selectedImage: null,
            name : "",
            number : null,
            price : null,
            totalprice : null,
        }
      }
    },
    methods : {
        onChange(e) {
        const file = e.target.files[0];
        this.product.selectedImage = URL.createObjectURL(file);
      },
      addProduct(){
        this.product.totalprice = this.product.price * this.product.number;
        eventBus.$emit("ProductAdded", this.product);
        this.product = {
            selectedImage: null,
            name : "",
            number : null,
            price : null,
            totalprice : null,
        }
      }
    }
}
</script>