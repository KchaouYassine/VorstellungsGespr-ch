<template>
    <div class="container">
         <form class="login" @submit.prevent="register">
             <h2>Register</h2>
             <input type="email" placeholder="Email address" v-model="registerForm.email" >
             <input type="password" placeholder="password" v-model="registerForm.password" >
             <button type="submit">Register</button>
         </form>
    </div> 
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