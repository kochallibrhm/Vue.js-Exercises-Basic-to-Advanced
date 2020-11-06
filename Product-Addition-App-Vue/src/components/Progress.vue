<template>
        <div class="progress">
      <div class="progress-bar bg-info" role="progressbar" :style="{width: productPercentage + '%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        {{productCounter}}/10
      </div>
    </div>
</template>

<script>
import { eventBus } from '../main'
export default {
    data(){
      return{
        productCounter : 0,
        productPercentage : 0,
      }
    },
    created(){
      eventBus.$on("ProductCounter", (length) =>{
        this.productCounter = length;
        this.productPercentage = length * 10;
      })
    }
}
</script>