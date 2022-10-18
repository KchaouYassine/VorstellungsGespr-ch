<template>
  <router-view />
</template>

<script>
import { useStore } from 'vuex';
import { onBeforeMount } from 'vue';
import Navbar from '@/components/Navbar'


export default ({
  setup() {
    const store = useStore();
    onBeforeMount(() => {
      store.dispatch('fetchUser');
    })
  },
})
</script>


<style lang="scss">
*{
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
:root{
  --darkColor:#001923;
  --green-color:#bae3c1;
  --section-color: #eff7fa;
}


</style>
