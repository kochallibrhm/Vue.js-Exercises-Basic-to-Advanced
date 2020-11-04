<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>I am a child component which inside of Parent Component. </p>
    <p> {{title}} :: {{ switchName() }} </p>
    <p> IQ level: {{iqlevel}} </p>
    <button type="button" class="btn btn-primary" @click="sendToParent">Send To Parent</button>
  </div>
</template>

<script>
import { eventBus } from "../main"

export default {
  data(){
    return{
      iqlevel : "3"
    }
  },
  props : {
    title : {
      type : String,
      default : "This is default title",
    },
  },
  methods : {
    switchName(){
      return this.title.split("").reverse().join("");
    },
    sendToParent(){
      this.$emit("dataChild1", "Child 1");
    }
  },
  created(){
    eventBus.$on("iqlevel",  (iq) => {
      this.iqlevel = iq;
    })
  }
}
</script>
<style scoped>
  div {
    background-color: lightcoral;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>
