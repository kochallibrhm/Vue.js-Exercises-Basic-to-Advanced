<template>
  <div class="container">
    <h1>Parent Component (User)</h1>
    <p>This is parent component...</p>
    <button type="button" class="btn btn-warning" @click="changeTitle">Change Title</button>
    <hr>
    <p>This is the data comes from : {{dataChild1}} </p>
    <p>This is the data comes from : {{dataChild2}} </p>
    <hr>
    <div class="row">
      <app-user-detail @dataChild1 = "dataChild1 = $event" :title = "title" ></app-user-detail>
      <app-user-edit  @dataChild2 = "dataChild2 = $event" :title = "title" ></app-user-edit>
    </div>
  </div>
</template>
<script>
  import UserDetail from "./UserDetail";
  import UserEdit from "./UserEdit";
  export default {
    components : {
      appUserDetail : UserDetail,
      appUserEdit : UserEdit,
    },
    data(){
      return{
        title : "Hello World!",
        dataChild1: "",
        dataChild2: "",
      }
    },
    methods : {
      changeTitle(){
        this.title = "Have you met me?"
      }
    }
  }
</script>

<style>
  div.container{
    margin-top: 30px;
    padding: 20px 40px;
    background-color: #6a8d99;
    border: 1px solid #666;
  }
  div.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
