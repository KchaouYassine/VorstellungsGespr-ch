<template>
  <div class="home">
    <Navbar />
    <!-- <button @click.prevent="logout" >logout</button> -->
  </div>
</template>

<script>

import {auth} from '../firebase';
import { useStore } from 'vuex';
import Navbar from '@/components/Navbar'

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
  components: {
    Navbar
  }

};
</script>
