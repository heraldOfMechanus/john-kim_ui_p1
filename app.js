import navbarComponent from './components/navbar/navbar.component.js';
import loginComponent from './components/login/login.component.js';
import facLoginComponent from './components/facLogin/facLogin.component.js';

import { Router } from './util/router.js';

// ----------------------------------------------------------------------------

let routes = [
    {
        path: '/login',
        component: loginComponent
    },
    {
        path: '/facLogin',
        component: facLoginComponent
    }
]

const router = new Router(routes);

window.onload = () => {
    console.log(navbarComponent);
    navbarComponent.render();
}

export default router;