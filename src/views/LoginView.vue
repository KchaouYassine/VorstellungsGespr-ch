<template>
    <section class="authSection">
        <div class="containerV">
        <form class="login" @submit.prevent="login" >
            
            <h2>Anmelden</h2>
            <div class="FormBox">
                <div class="rowe">
                    <div class="inputBox"> 
                        <p class="text">Email</p>
                        <input type="email" placeholder="Email address" v-model="loginForm.email" >  
                    </div>
                </div>

                <div class="rowe">
                    <div class="inputBox"> 
                        <p class="text">Password</p>
                        <input type="password" placeholder="password" v-model="loginForm.password" >
           
                    </div>
                </div>
                <div class="rowe">
                    <button type="submit">Anmelden</button>
                </div>

                <div class="lastRowe">
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

<style scoped >
    @import '@/assets/styles/auth.css';
</style>
