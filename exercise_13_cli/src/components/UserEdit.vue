<template>
  <div class="col-md-s6">
    <h3>Child Component 2</h3>
    <p>I am child component 2 which inside of Parent Component.</p>
    <p> {{title}} :: {{switchName()}} </p>
    <p> IQ level : {{iqlevel}} </p>
     <button type="button" class="btn btn-primary" @click="sendToParent">Send To Parent</button>
     <button type="button" class="btn btn-success" @click="increaseIq">Increase IQ</button>
     
  </div>
</template>

<script>
import { eventBus } from "../main"

export default {
  data(){
    return{
      iqlevel : 3
    }
  },
  props : {
    title : {
      type : String,
      default : "This is default title"
    },
  },
  methods : {
    switchName(){
      return this.title.split("").reverse().join("");
    },
    sendToParent(){
      this.$emit("dataChild2", "Child 2" );
    },
    increaseIq(){
      this.iqlevel = 30;
      eventBus.$emit("iqlevel", this.iqlevel);
    }
  }
}
</script>

<style scoped>
  div {
    background-color: lightgoldenrodyellow;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>

