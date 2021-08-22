import navbarComponent from './components/navbar/navbar.component.js';
import loginComponent from './components/login/login.component.js';
import registerComponent from './components/register/register.component.js';
import studentDashboardComponent from './components/studentDashboard/studentDashboard.component.js';
import { Router } from './util/router.js';

// ----------------------------------------------------------------------------

let routes = [
    {
        path: '/login',
        component: loginComponent
    },

    {
        path: '/register',
        component: registerComponent
    },

    {
        path: '/studentDashboard',
        component: studentDashboardComponent
    }
]

const router = new Router(routes);

window.onload = () => {
    console.log(navbarComponent);
    navbarComponent.render();
}

export default router;