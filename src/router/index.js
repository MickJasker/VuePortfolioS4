import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/DashboardPage'
import Home from '../components/porfolioPages/HomePage'
import Login from '../components/LoginPage'
import Password from '../components/ForgetPass'
import PortfolioItem from '../components/porfolioPages/PortfolioItem'
import PorfolioAdmin from '../components/PortfolioManager'
import firebase from 'firebase'
import Landing from '../components/landingPage'
import error from '../components/404'

Vue.use(Router)

let router = new Router({
	routes: [
		{
			path: '*',
			redirect: '/'
		},
		{
			path: '/ERROR:404',
			name: '404
		},
		{
			path: '/',
			name: 'Landing',
			component: Landing
		},
		{
			path: '/home',
			name: 'Home',
			component: Home
		},
		{
			path: '/portfolio/:sprint/:id',
			name: 'PortfolioItem',
			component: PortfolioItem,
			props: true
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/forgetPassword',
			name: 'Password',
			component: Password
		},
		{
			path: '/admin/dashboard',
			name: 'Dashboard',
			component: Dashboard,
			meta: {
				requiresAuth: true
			}
		},
		{
			path: '/admin/portfolioManager',
			name: 'PortfolioManager',
			component: PorfolioAdmin,
			meta: {
				requiresAuth: true
			}
		}
	]
})

router.beforeEach((to, from, next) => {
	let currentUser = firebase.auth().currentUser;
	let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

	if (requiresAuth && !currentUser) next('admin/login')
	else if (!requiresAuth && currentUser) next('admin/dashboard')
	else next()
})

export default router
