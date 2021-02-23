import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import("../views/index"),
	},
  {
    path: "/index",
    component: () => import("../views/index")
  },
  {
    path: "/index2",
    component: () => import("../views/index2")
  },
];

const router = new VueRouter({
	routes,
});

export default router;
