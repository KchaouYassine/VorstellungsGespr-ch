<template>
   <div class="container">
        <form class="login" @submit.prevent="login">
            <h2>Login</h2>
            <input type="email" placeholder="Email address" v-model="loginForm.email" >
             <input type="password" placeholder="password" v-model="loginForm.password" >
            <button type="submit">Login</button>
        </form>
   </div> 
</template>

<script>

import { useStore } from 'vuex'
import { ref } from 'vue'

export default ({
    
    setup () {
        debugger;
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
})
</script>
