var vm1 = new Vue({
    el : "#app1",

    data : {
        title : "Vuejs Instance App1 Title"
    }
})

var vm2 = new Vue({
    el : "#app2",
    
    data : {
        
    },

    methods : {
        changeTitle : function(){
            vm1.title = "This is new title";
            alert("Title vm2 instance tarafindan degistiriliyor...")
            console.log(vm1.title);
        }
    }
})