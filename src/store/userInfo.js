import { defineStore } from "pinia";

export const userStore = defineStore({
    id: 'userInfo',
    state:() =>{
        return{
            userInfo:{}
        }
    },
    action:{
        setUserInfo(data){
            this.userInfo = data;
        }
    }
})