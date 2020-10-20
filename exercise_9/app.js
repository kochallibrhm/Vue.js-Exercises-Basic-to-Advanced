var vm1 = new Vue({
    

    data : {
        title : "Vuejs Instance App1 Title"
    }
})

vm1.$mount("#app1");

var vm2 = new Vue({
    el : "#app2",
    
    methods : {
        changeTitle : function(){
            vm1.$refs.heading.innerText = "This is New Title (Updated with $refs)";

        }
    }
})