import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ContactPage from './pages/ContactPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import ProjectsPage from './pages/ProjectsPage.vue';
import SingleProject from './pages/SingleProject.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsPage
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactPage
        },
        {
            path:'/project/:slug',
            name: 'project-single',
            component: SingleProject

        },
        {
            path: "/*",
            name: "not-found",
            component: NotFoundPage
        }
    ]
});

export { router };