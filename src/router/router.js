import hackerNewsTop from "../components/hackerNewsTop"
import hackerNewsBest from "../components/hackerNewsBest"
import hackerNewsNew from "../components/hackerNewsNew"
import about from "../components/about"
import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

var routes = [
    {path: "/", redirect: "/top"},
    {path: "/top", name: "hackerNewsTop", component: hackerNewsTop},
    {path: "/new", name: "hackerNewsNew", component: hackerNewsNew},
    {path: "/best", name: "hackerNewsBest", component: hackerNewsBest},
    {path: "/about", name: "about", component: about}
]

export default new Router({
    routes
})