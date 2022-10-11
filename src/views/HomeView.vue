<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- <button @click="$store.dispatch('logout')" >logout</button> -->
    <button @click.prevent="logout" >logout</button>
    <div class="alert alert-primary" role="alert">
      A simple primary alert—check it out!
    </div>
    <CAlert color="primary">A simple primary alert—check it out!</CAlert>
    <CAlert color="dark" variant="solid">A simple solid dark alert—check it out!</CAlert>


  </div>
</template>

<script>

import {auth} from '../firebase';
import { useStore } from 'vuex';


export default {
  setup(){
    const store = useStore();
    const logout =()=>{
      store.dispatch('logout');
    }
    return {
      logout,
    }
  },
  name: "HomeView",

};
</script>
