<template>
    <nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">HPC</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link active" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link " to="/about">About</router-link>
                </li>
           
                
            </ul>
            <ul class="navbar-nav me-5 mb-2 mb-lg-0">
                <li class="nav-item dropdown ">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Profil</a></li>
                        <!-- <li><router-link class="dropdown-item" to="/logout">Logout</router-link></li> -->
                        
                    </ul>
                </li>
                <li class="nav-item">
                    <button @click="$store.dispatch('logout')" class="btn navbtn">Logout</button>
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
        color:#bae3c1;
    }
    .navbar-brand:hover{
        color:#bae3c1;
    }

    .nav-item:hover {
        background-color: #bae3c1;
        transition :all ease-in-out;
    }
    .nav-link ,.nav-link:hover ,.navbtn{
        color: #fff;
    }
//     a {
//     font-weight: bold;
//     color: #fff;

//     &.router-link-exact-active {
//       color: #bae3c1;
//     }
//   }
}


</style>
