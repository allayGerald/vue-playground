import Vue from 'vue'
import VueRouter from "vue-router"
import HomeComponent from "../components/HomeComponent"
import PortfolioComponent from "../components/portfolio/PortfolioComponent"
import StocksComponent from "../components/stocks/StocksComponent"

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeComponent
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: PortfolioComponent
    },
    {
        path: '/stocks',
        name: 'Stocks',
        component: StocksComponent
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router