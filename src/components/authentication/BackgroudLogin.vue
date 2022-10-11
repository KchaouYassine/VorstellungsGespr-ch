<template>
    <div class="scene">
        <div class="sun"></div>
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
    name: "backgroudLogin",
})
</script>

<style scoped>
.scene {
    height: 100vh;
    width: 100%;
    position: relative;
    background:rgb(0,83,204);
    background: linear-gradient(180deg, rgba(0,83,204,1) 0%, rgba(0,142,238,1) 50%, rgba(136,192,230,1) 100%);
    overflow: hidden;
    background-attachment: fixed;
}
.sun{
position: absolute;
top: 50px;
left: 50px;
width:300px;
height: 300px;
border-radius: 50%;
box-shadow: 
    inset 0 0 50px #fff,
    inset 20px 0 80px rgb(255,0,0),
    inset -20px 0 80px rgb(255,217,0),
    inset 20px 0 300px rgb(255,0,0),
    inset -20px 0 300px rgb(255,217,0),
    0 0 50px #fff,
    -10px 0 80px rgb(255,0,0),
    10px 0 80px rgb(255,217,0) ;
}
.cloud1{
        position: absolute;
        top:0;
        left:0;
        max-width:600px;
        z-index: 20;
        animation:animateCloud 30s linear infinite;
}
    .cloud2{
        position: absolute;
        top:0;
        left:0;
        max-width:300px;
        z-index: 20;
        animation: animateCloud 35s linear infinite;
    }
    .cloud3{
        position: absolute;
        top:0;
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