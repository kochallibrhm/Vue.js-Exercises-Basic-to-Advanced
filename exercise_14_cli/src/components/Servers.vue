<template>
    
      <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <server-list-item v-for="server in servers" :key = "server.id" :serverData = "server"></server-list-item>
        </ul>
      </div>
</template>

<script>
import ServerListItem from './ServerListItem'
import {eventBus} from '../main'
export default {

    components : {
      serverListItem : ServerListItem,
    },
    data(){
      return{
        servers : [
          {id : 1, Status : "Critical"},
          {id : 2, Status : "Normal"},
          {id : 3, Status : "Dangerous"},
          {id : 4, Status : "Unknown"}
        ]
      }
    },

    
}
</script>