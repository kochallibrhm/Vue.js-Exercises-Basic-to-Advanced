var data = {
    status : "Deactive"
}

Vue.component('mycomp',{
    data : function(){
        return data
    },
    template : '<p> mycomp Server State: {{ status }} <button @click = "changeStatus"> Degistir </button></p>',
    methods : {
        changeStatus : function(){
            this.status = "Active"
        }
    }
});

Vue.component('mycomp2',{
    data : function(){
        return {
            status : "Deactive"
        }
    },
    template : '<p> mycomp2 Server State: {{ status }} <button @click = "changeStatus"> Degistir </button></p>',
    methods : {
        changeStatus : function(){
            this.status = "Active"
        }
    }
});

new Vue({
    el : "#app"
});