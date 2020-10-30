new Vue({
    el : "#app",
    data : {
        title : "Vue.js Instance",
        info : "Open the console for see the lifecycle"
    },
    methods : {
        destroy : function(){
            this.$destroy();
        }
    },
        beforeCreate : function(){
            console.log("beforeCreate()");
        },

        created : function(){
            console.log("created()");
        },

        beforeMount : function(){
            console.log("beforeMount()");
        },

        mounted : function(){
            console.log("mounted()");
        },

        beforeUpdate : function(){
            console.log("beforeUpdate()");
        },

        updated : function(){
            console.log("updated()");
        },

        beforeDestroy : function(){
            console.log("beforeDestroy()");
        },

        desteroyed: function(){
            console.log("desteroyed()");
        },
    
});