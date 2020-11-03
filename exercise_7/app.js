new Vue({
    el : "#app",

    data : {
        player_heal : 100,
        monster_heal : 100,
        game_is_on : false,
        logs : [],
    }, 
    

    methods : {
        start_game : function(){
            this.game_is_on = true;
        },
        attack : function(){
            var point = Math.ceil(Math.random() * 10);
            this.monster_heal -= point;
            this.monster_attack();
            this.add_to_log({turn : "p", text : "Player Damage ("+ point + ")"});
            console.log("M: " + this.monster_heal);
            console.log("P: " + this.player_heal);
            //alert(point);
        },
        heal_up : function(){
            var point = Math.ceil(Math.random() * 20);
            this.player_heal += point;
            this.monster_attack();
            this.add_to_log({turn : "p", text : "Player Healed ("+ point + ")"});
            console.log("M: " + this.monster_heal);
            console.log("P: " + this.player_heal);
        },
        special_attack : function(){
            var point = Math.ceil(Math.random() * 25);
            this.monster_heal -= point;
            this.monster_attack();
            this.add_to_log({turn : "p", text : "Player Damage ("+ point + ")"});
            console.log("M: " + this.monster_heal);
            console.log("P: " + this.player_heal);
        },
        give_up : function(){
            this.player_heal = 0;
            console.log("M: " + this.monster_heal);
            console.log("P: " + this.player_heal);
            this.add_to_log({turn : "p", text : "Player Gived Up!!!"});
        },
        monster_attack : function(){
            var point = Math.ceil(Math.random() * 10);
            this.player_heal -= point;
            this.add_to_log({turn : "m", text : "Monster Damage ("+ point + ")"});
        },

        add_to_log : function(log){
            this.logs.push(log);
        }
    },

    watch : {
        player_heal : function(value){
            if(value <= 0){
                this.player_heal = 0;
                if(confirm("OYUNU KAYBETTİN! Tekrar denemek ister misiniz?")){
                    this.player_heal = 100;
                    this.monster_heal = 100;
                    this.logs = [];
                }
            }
            else if(value > 100){
                this.player_heal = 100;
            }
        },

        monster_heal : function(value){
            if(value <= 0){
                this.monster_heal = 0;
                if(confirm("TEBRİKLER, OYUNU KAZANDIN! Tekrar denemek ister misiniz?")){
                    this.player_heal = 100;
                    this.monster_heal = 100;
                }
            }
            else if(value > 100){
                this.monster_heal = 100;
                this.logs = [];
            }
        }
    },

    computed : {
        player_progress : function(){
            return {
                width : this.player_heal + "%"
            }
        },
        
        monster_progress : function(){
            return{
                width : this.monster_heal + "%"
            }
        }
    }
});
