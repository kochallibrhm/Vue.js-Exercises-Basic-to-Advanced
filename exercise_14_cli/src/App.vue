<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
    <app-servers>
      <server-list-item></server-list-item>
    </app-servers>
    
    <app-info></app-info>
    </div>
    <app-footer></app-footer>
   
      
    
    
    
  </div>
</template>

<script>
import Header from './components/Header' 
import Footer from './components/Footer'
import Servers from './components/Servers'
import Info from './components/Info'


export default {
  components : {
    appHeader : Header,
    appFooter : Footer,
    appServers : Servers,
    appInfo : Info
  }
}
</script>

<style>

</style>
