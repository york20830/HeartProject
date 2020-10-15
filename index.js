        var app = new Vue({
            el: "#app",
            data: {
                btnCheck:false
            },
            methods:{
                change(){
                    this.btnCheck = !this.btnCheck
                }
            }
        })