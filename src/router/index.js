import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import {auth} from "../firebase";
 
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth:true
    }
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
    meta: {
      requiresAuth:true
    }
  },
  {
    path: "/login",
    name: "login",
    component: LoginView, 
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView, 
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to,from,next) =>{ 
  if( (to.path ==="/login" || to.path === "/register") && auth.currentUser){
    next('/')
    return;
  }

  if(to.matched.some(record =>record.meta.requiresAuth) && !auth.currentUser){
    next('/login')
    return;
  }
  next();

})

export default router;
