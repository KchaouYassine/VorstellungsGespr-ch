<template>
    <div class="scene">
        <img alt="Cloud" src="@/assets/cloud1.png" class="cloud1"/>
        <img alt="Cloud" src="@/assets/cloud2.png" class="cloud2" />
        <img alt="Cloud" src="@/assets/cloud3.png" class="cloud3" />
        <img alt="Cloud" src="@/assets/cloud1.png" class="cloud4" />
        <img alt="Cloud" src="@/assets/cloud2.png" class="cloud5"/>
        <img alt="Cloud" src="@/assets/cloud3.png" class="cloud6"/>
    </div>

</template>

<script>


export default ({
    name: "clouds",
})
</script>

<style scoped>
.scene {
    width: 100%;
    overflow: hidden;
    background-attachment: fixed;
}
.cloud1{
        position: absolute;
        top:5%;
        left:0;
        max-width:600px;
        z-index: 20;
        animation:animateCloud 30s linear infinite;
}
    .cloud2{
        position: absolute;
        top:10%;
        left:0;
        max-width:300px;
        z-index: 20;
        animation: animateCloud 35s linear infinite;
    }
    .cloud3{
        position: absolute;
        top:15%;
        left:0;
        max-width:600px;
        z-index: 20;
        animation: animateCloud 80s linear infinite;
    }
    .cloud4{
        position: absolute;
        top:200px;
        left:0;
        max-width:300px;
        z-index: 20;
        animation: animateCloud 70s linear infinite;
        animation-delay: -20s;
    }
    .cloud5{
        position: absolute;
        top:150px;
        left:0;
        max-width:500px;
        z-index: 20;
        animation: animateCloud 40s linear infinite;
        animation-delay: -5s;
    }
    .cloud6{
        position: absolute;
        top:75px;
        left:0px;
        max-width:400px;
        z-index: 20;
        animation: animateCloud 30s linear infinite;
        animation-delay: -10s;
    }

    @keyframes animateCloud
    {
        0%{
            transform : translateX(-100%) scale(1)
        }
        100%{
            transform : translateX(400%) scale(1.5)
        }
    }
</style>
