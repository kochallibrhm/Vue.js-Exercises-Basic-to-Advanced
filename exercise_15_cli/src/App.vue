<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br><br>
        <button @click="blueComp" type="button" class="btn btn-primary">Take The Blue Pill</button>
        <button @click="redComp" type="button" class="btn btn-danger">Take The Red Pill</button>
        <button @click="greenComp" type="button" class="btn btn-success">Take The Green Pill</button>
        <hr>
        <component :is = "selectedComp">
          <h3 slot="heading">Here We Are, You Take The {{pillColor}} Pill </h3>
          <h4 slot="h4"> {{content}} </h4>
        </component>
        
      </div>
    </div>
  </div>
</template>

<script>
import Red from "./components/Red"
import Blue from "./components/Blue"
import Green from "./components/Green" 

export default {
  data () {
    return {
      selectedComp : "",
      content : "",
      pillColor : "",
    }
  },
  components : {
    redComp : Red,
    blueComp : Blue,
    greenComp : Green,

  },
  methods : {
    blueComp(){
      this.selectedComp = "blueComp";
      this.pillColor = "Blue";
      this.content = "It's okey dude. Keep living like that. You are the best"
    },
    redComp(){
      this.selectedComp = "redComp";
      this.pillColor = "Red";
      this.content = "You will lose. You will be defeaten. Sometimes, you are gonna work hard but you will get nothing. You will fall again and again. Are you gonna cry or do your best?";
    },
    greenComp(){
      this.selectedComp = "greenComp";
      this.pillColor = "Green";
      this.content = "There is no green pill actually. I am just kidding.";
    }
  }
}
</script>

<style>
  h4 {
    color: honeydew;
  }
  h3{
    color: honeydew;
  }
</style>

