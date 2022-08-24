import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '@/view/HomePage.vue';
import AboutPage from '@/view/AboutPage.vue';
import GoodPage from '@/view/GoodPage.vue';


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Index',
			component: HomePage
		},
		{
			path: '/home',
			name: 'Home',
			component: HomePage
		},
		{
			path: '/about',
			name: 'About',
			component: AboutPage
		},
		{
			path: '/good/:id',
			name: 'Good',
			component: GoodPage
		},
	]
});
export default router;