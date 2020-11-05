<template>
    <div>
        <li @click="sentStatus"
            class="list-group-item">
            Server #{{ serverData.id }} <br> Status: <strong> {{serverData.Status}} </strong>
            
        </li>
        
    </div>
</template>

<script>
import {eventBus} from '../main'

export default {
    
    props : {
        serverData : {

        }
    },

    methods : {
      sentStatus(){
        eventBus.sendToData(this.serverData);
      }
    },
}
</script>