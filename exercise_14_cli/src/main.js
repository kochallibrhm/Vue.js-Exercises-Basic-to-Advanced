import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods : {
    sendToData(ServerData){
      this.$emit("serverData", (ServerData));
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
