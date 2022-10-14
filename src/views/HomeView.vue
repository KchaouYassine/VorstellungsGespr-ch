<template>
  <div class="home">
    <Navbar />
   <section class="homeSection">
    <div class="paragraph">
      <p class="">Green By IT  </p>
      <p>Project</p>
    </div>
    <Clouds class="clouds" />
      
   </section>
        
  </div>
</template>

<script>

import {auth} from '../firebase';
import { useStore } from 'vuex';
import Navbar from '@/components/Navbar';
import Clouds from '@/components/Clouds'

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
    Navbar,
    Clouds
  }

};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap');
.img-fluid-modi{
  width: 100%;
  height: calc(100vh - 56px);
}
.homeSection{
  width: 100%;
  height: calc(100vh - 56px);
  background: url('@/assets/bg1.jpg');
  background-size: cover;
  background-repeat:no-repeat;
  position: relative;
  overflow: hidden;
}
.homeSection .paragraph{
  position: absolute;
  top: 30%;
  right: 5%;
    
}
.homeSection p{
  font-family: 'Kaushan Script', cursive;
  font-size: 120px;
  color:#001923;
}
.clouds{
  width: 100%;
  height: calc(100vh - 56px);
  overflow: hidden;
  position: absolute;

}

</style>
