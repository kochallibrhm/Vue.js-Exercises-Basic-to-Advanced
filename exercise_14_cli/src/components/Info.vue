<template>
    <div class="col-xs-12 col-sm-6" v-if="Object.keys(server).length === 0">
        <p>Server Status is out of date!! <i> <strong> (Please click on the server you want to know about!) </strong> </i> </p>
    </div>

    <div class="col-xs-12 col-sm-6" v-else>
        <h3>Server ID: #{{server.id}} </h3>
        <h3>Server Status: <strong>{{server.Status}}</strong>  </h3> <br>
        <button @click="setToNormal()" type="button" class="btn btn-success">Set To Normal</button>
    </div>
</template>
<script>
import {eventBus} from '../main'
export default {
  data(){
    return{
      server : {},
      normalStatus : "Normal",
    }
  },
  created(){
      eventBus.$on("serverData", (server) => {
        this.server = server;
      })
    },
    methods : {
      setToNormal(){
        this.server.Status = "Normal"
      }
    }
}
</script>