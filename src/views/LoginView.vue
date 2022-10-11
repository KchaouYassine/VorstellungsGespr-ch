<template>
    <section>
        <div class="container">
        <form class="login" @submit.prevent="login" >
            <CFormCheck :button="{ color: 'primary', variant: 'outline' }" id="btn-check-outlined" autocomplete="off" label="Single toggle"/>
            <h2>Anmelden</h2>
            <div class="FormBox">
                <div class="row">
                    <div class="inputBox"> 
                        <p class="text">Email</p>
                        <input type="email" placeholder="Email address" v-model="loginForm.email" >  
                    </div>
                </div>

                <div class="row">
                    <div class="inputBox"> 
                        <p class="text">Password</p>
                        <input type="password" placeholder="password" v-model="loginForm.password" >
           
                    </div>
                </div>
                <div class="row">
                    <button type="submit">Anmelden</button>
                </div>

                <div class="lastRow">
                    <span>Sie haben noch kein Konto? </span>
                    <span>Melden Sie sich an <router-link to="/register">Register</router-link></span>
                </div>
                
            </div>
            
        </form>
   </div> 
    </section>
   
</template>

<script>

import { useStore } from 'vuex'
import { ref } from 'vue'
import BackgroudLogin from '@/components/authentication/BackgroudLogin'



export default ({
    
    setup () {
        
        const loginForm = ref({});

        const store = useStore();

        console.log(loginForm.value);
        const login = () => {
            store.dispatch('login', loginForm.value);
        }
        return{
            login,
            loginForm
        } 
    },
    components :{
        BackgroudLogin
    }
})
</script>

<style >
    section{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        width: 100%;
        height:100vh;
        background:#001923;
    }

    section::before{
        content: '';
        position: absolute;
        width: 350px;
        height:350px;
        background: linear-gradient(#ffeb3b,#e91e63);
        border-radius: 50%;
        transform:translate(-420px , -180px);
    }

    section::after{
        content: '';
        position: absolute;
        width: 300px;
        height:300px;
        background: linear-gradient(#2196f3,#83d8ff);
        border-radius: 50%;
        transform:translate(400px , 180px);
    }

    .container{
        position: relative;
        z-index: 10;
        width: 100%;
        max-width: 1000px;
        padding: 50px;
        background:rgba(255, 255, 255, 0,1);
        box-shadow: 0 25px 45px rgba(0,0,0,0.1);
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-right: 1px solid rgba(255, 255, 255, 0.1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        border-radius : 10px;
        overflow: hidden;
        backdrop-filter: blur(25px);
        
    }
    .container::before{
        content: '';
        position: absolute;
        top: 0;
        left:-40%;
        width: 100%;
        height: 100%;
        background:rgba(255, 255, 255, 0.05);
        pointer-events:none;
        transform:skewX(-15deg);
        

    }

    .container h2 {
        width : 100%;
        text-align:center;
        color:#fff;
        font-size:36px;
        margin-bottom:20px;
        
    }

    .FormBox{ 
        display: flex;
        flex-direction: column;
        align-items:center
    }
    .row{
        padding: 0 10px;
        margin : 20px 0;
        height:80px;
        width:80%;
        
    }
    .inputBox{
        height:100%;
        width: 100%;
        display:flex;
        flex-direction: column;
        justify-content:left;
        align-items:center;
    }

    .inputBox p{
        width:50%;
        color:#fff;
        text-align: left;
    }
    
    .inputBox input{
        height: 60px;
        width:50%;
        background:#fff;
        box-shadow: none;
        outline: none;
        font-size:15px;
        padding: 10px;
        z-index: 1;
        color:#000;
        border: 1px;

    }
    .row button{
        width:50%;
        /* text-align: center; */
        padding:10px 40px;
        cursor: pointer;
        background:transparent;
        color:#fff;
        font-weight:bold;
        font-size:18px;
        border-left: none;
        border-top: none;
        border-right: none;
        border-color: #fff;
       
    }
    .lastRow span{
        display: block;
        color:#742D4A;
    }
    .lastRow a{
        color:#742D4A;
        font-weight:bold;
    }



</style>
