import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import AboutMe from './pages/AboutMe.vue'
import Portfolio from './pages/Portfolio.vue'

const history = createWebHistory()

const router = createRouter({
	history,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/about-me',
			name: 'about',
			component: AboutMe,
		},
		{
			path: '/portfolio',
			name: 'portfolio',
			component: Portfolio,
		},
	],
})

export { router }