<template>
    <section class="authSection">
        <div class="containerV">
            <form class="login" @submit.prevent="register">
            
                <h2>Register</h2>
            <div class="FormBox">
                <div class="rowe">
                    <div class="inputBox"> 
                        <p class="text">Email</p>
                        <input type="email" placeholder="Email address" v-model="registerForm.email" >
                    </div>
                </div>

                <div class="rowe">
                    <div class="inputBox"> 
                        <p class="text">Password</p>
                        <input type="password" placeholder="password" v-model="registerForm.password" >
           
                    </div>
                </div>
                <div class="rowe">
                    <button type="submit">Register</button>
                </div>

                <div class="lastRowe">
                    <span>Haben Sie schon ein Konto </span>
                    <span>Melden Sie sich an <router-link to="/login">Login</router-link></span>
                </div>
                
            </div>
            
        </form>
   </div> 
    </section>
 </template>
 
<script>
import { useStore } from 'vuex'
import { ref } from 'vue'

 export default ({
    setup () {
        
        const registerForm = ref({});

        const store = useStore();

        const register = () => {
			store.dispatch('register', registerForm.value);
		}
        return{
            register,
            registerForm
        }
    },

 })
 </script>

<style scoped >
@import '@/assets/styles/auth.css';
</style>
