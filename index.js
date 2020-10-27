        var app = new Vue({
            el: "#app",
            data: {
                btnCheck:false,
                date: null,
                lock:true,
            },
            methods:{
                change(){
                    this.btnCheck = !this.btnCheck
                },
                unlock(){
                    console.log(this.date)
                    if(this.date=='2020-10-29'){
                        alert('噢，身分符合(?')
                        this.lock = false
                    }else{
                        alert('輸入錯誤!!!妳是誰!?')
                    }
                },
                detectDate(){
                    if((parseInt(new Date().getMonth())+1) == 10 && new Date().getDate() == 29 )
                    {
                        return true
                    }else{
                        return false
                    }
                }
            }
        })