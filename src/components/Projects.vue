<template>
    <section class="projects text-center py-3">
        <div class="container">
            <div class="title-main py-2 position-relative">
            <!-- <div class="image py-2">
                    <img src="@/assets/title.png" >
            </div> -->
            <h1 class="fw-bold"> Our Project </h1>
            <p  class="text-black-50">and there is more and more</p>
            </div>
            
            <div class="row">
                <!-- <div v-for="(projekt ,index) in $store.state.projects" :key="index"> -->
                    <div class="col-md-6 col-lg-4">
                        <div class="icons position-relative">
                        <font-awesome-icon icon="1" class="position-absolute bottom-0 number" />
                        <font-awesome-icon icon="battery-car" class="fa-4x position-absolute bottom-0 icon" />
                        </div>
                        <div class="content py-2">
                            <h2>chargeBIG</h2>
                            <p class="lh-lg">The chargeBIG project is a joint development effort with MAHLE Group and the Eliso company to create a new kind of charging infrastructure for electric drive vehicles.</p>
                        </div>
                    
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icons position-relative">
                        <font-awesome-icon icon="2" class="position-absolute bottom-0 number" />
                        <font-awesome-icon icon="bolt" class="fa-4x position-absolute bottom-0 icon" />
                        </div>
                        <div class="content py-2">
                            <h2>myPowerGrid</h2>
                            <p class="lh-lg">myPowerGrid delivers a centralized, easy-to-use management infrastructure for an aggregated distributed energy storage transparently serving the interests of both corporate and private stakeholders.</p>
                        </div>
                    
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="icons position-relative">
                        <font-awesome-icon icon="3" class="position-absolute bottom-0 number" />
                        <font-awesome-icon icon="leaf" class="fa-4x position-absolute bottom-0 icon" />
                        </div>
                        <div class="content py-2">
                            <h2>GRID-Friends</h2>
                            <p class="lh-lg">myPowerGrid delivers a centralized, easy-to-use management infrastructure for an aggregated distributed energy storage transparently serving the interests of both corporate and private stakeholders.</p>
                        </div>
                    
                    </div>
                    
                <!-- </div> -->
                
            </div>
        </div>
   
   
    </section>
</template>
<script>
import { useStore } from 'vuex'
export default {
    setup() {

        const store = useStore();

        
    },
}
</script>


<style lang="scss" >

.title-main  h1{
    font-family: 'Kaushan Script', cursive;
    font-size: 50px;
}
.title-main::after{
    content: '';
    position: absolute;
    width: 100px;
    height: 3px;
    left: 50%;
    transform:translate(-50%);
    background-color:var(--green-color);
    
}

.projects .icons{
    height: 200px;
}

.projects .icons svg{
    left: 50%;
    transform: translate(-50%);
}
.projects .icons .number{
    height: 12rem;
    color:var(--section-color);
}

.projects .icons .icon{
    color:var(--green-color);
}

</style>