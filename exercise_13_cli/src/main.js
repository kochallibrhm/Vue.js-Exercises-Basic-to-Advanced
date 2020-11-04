import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods : {
    increaseIq(iq){
      this.$emit("iqlevel", iq);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
