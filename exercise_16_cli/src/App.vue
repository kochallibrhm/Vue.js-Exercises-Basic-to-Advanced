<template>
  <div class="container">
    <h3>Working with Form Data</h3>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <div class="panel panel-warning">
          <div class="panel-heading">
            <h4>Application Form</h4>
          </div>
          <div class="panel-body">
            <form>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="email">Username</label>
                    <input type="text" id="username" class="form-control" 
                            v-model.trim="user.name">
                  </div>
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-control" 
                            v-model.trim.lazy="user.password">
                  </div>
                  <div class="form-group">
                    <label for="age">Age</label>
                    <input type="number" id="age" class="form-control" 
                        v-model.number.trim="user.age">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label for="message">Description</label><br>
                  <textarea id="message" rows="3" class="form-control" 
                      v-model="user.description">
                  </textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <label>
                      <input type="checkbox" value="Software" v-model="user.interests"> Software
                    </label>
                    <label>
                      <input type="checkbox" value="Hardware" v-model="user.interests"> Hardware
                    </label>
                  </div>

                </div>
              </div>
              <div class="row">
                <div class="col-md-12 form-group">
                  <label>
                    <input type="radio" id="male" value="Male" 
                        v-model="user.sex"> Male
                  </label>
                  <label>
                    <input type="radio" id="female" value="Female" 
                        v-model="user.sex"> Female
                  </label>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 from-group">
                  <label>Şehir</label>
                  <select class="form-control" v-model="user.state">
                    <option selected v-for="state in states" :key="state.id" :value="state"> {{state}} </option>
                  </select>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-md-12">
                  <button
                    @click.prevent="submit"
                    class="btn btn-primary">Send!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6" v-if="isSubmitted">
          <div class="panel panel-info">
            <div class="panel-heading">
              <h4>Form Data</h4>
            </div>
            <div class="panel-body">
              <p>Username: {{user.name}} </p>
              <p>Password: {{user.password}} </p>
              <p>Age: {{user.age}} </p>
              <p style="white-space: pre">Description: {{user.description}} </p>
              <p><strong>İnterested with: </strong></p>
              <ul>
                <li v-for="interest in user.interests" :key="interest.id"> {{interest}} </li>
              </ul>
              <p>Sex: {{user.sex}} </p>
              <p>State: {{user.state}} </p>
            </div>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        user : {
          name : "",
          password : "",
          age : 23,
          description : "",
          interests : [],
          sex : "",
          state : "",
          
        },
        states : ["Çorum", "Konya", "Rize", "Aksaray", "Hakkari", "Van", "Muş"],
        isSubmitted : false,
      }
    },
    methods : {
      submit(){
        this.isSubmitted = true;
      }
    }
  }
</script>

<style>

</style>
