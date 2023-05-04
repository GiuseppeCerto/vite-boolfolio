import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import AboutMe from './pages/AboutMe.vue'
import Portfolio from './pages/Portfolio.vue'
import PortfolioShow from './pages/Portfolio.show.vue'
import NotFound from './pages/404.vue'

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
        {
			path: '/portfolio/:slug',
			name: 'portfolio.show',
			component: PortfolioShow,
			props: true,
		},
		{
			path: '/404',
			name: '404',
			component: NotFound,
		},
	],
})

export { router }