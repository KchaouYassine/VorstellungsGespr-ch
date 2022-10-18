<template>
    <nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">High Performance Computing</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link active" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link " to="/about">Services</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link " to="/about">About</router-link>
                </li>
                <li class="nav-item">

                    <div @click="$store.dispatch('logout')" class="nav-link ">Logout</div>
                </li>
           
                
            </ul>

 

            </div>
        </div>
    </nav>
</template>
<script>


export default ({
    setup() {
        
    },
})
</script>

<style lang="scss" >

nav{
    background:#001923;
    padding: 40px;
    .navbar-brand{
        color:var(--green-color);
    }
    .navbar-brand:hover{
        color:var(--green-color);
    }

    .nav-item:hover {
        background-color: var(--green-color);
        transition :all ease-in-out;
    }
    .nav-link ,.nav-link:hover ,.navbtn{
        color: #fff;
    }

}


</style>
