import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBatteryCar,fa1,fa2,fa3,faBolt,faLeaf } from '@fortawesome/free-solid-svg-icons';

library.add(faBatteryCar,fa1,fa2,fa3,faBolt,faLeaf);


createApp(App).component('font-awesome-icon' ,FontAwesomeIcon).use(store).use(router).mount("#app");
