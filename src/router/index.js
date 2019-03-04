import Vue from "vue";
import Router from "vue-router";
import { BASE_APP_URL } from "@/config";
import * as menus from "./menu";

Vue.use(Router);

var basePath = BASE_APP_URL;

var menu = [];
for (let routeItem in menus) {
  utils.log("[bootstrap] loading route... " + routeItem);
  menu.push(menus[routeItem]);
}

const layoutComponent = function(resolve) {
  require(["@/components/Layout/AppLayout.vue"], resolve);
};

const routes = [
  {
    path: "/",
    component: layoutComponent,
    name: "layout",
    redirect: "/index",
    children: [
      {
        path: "index",
        name: "home_section",
        component: function(resolve) {
          require(["@/components/Home/Index.vue"], resolve);
        }
      }
    ],
    meta: { anonymousAuthentication: true }
  },
  {
    path: "*",
    component: function(resolve) {
      require(["@/components/Common/404.vue"], resolve);
    },
    meta: { anonymousAuthentication: true }
  },
  ...menu
];

const router = new Router({
  base: basePath,
  mode: "history",
  linkActiveClass: "active",
  routes
});

router.beforeResolve((to, from, next) => {
  //utils.log(`beforeResolve: ${JSON.stringify(to)}`);
  next();
});

export default router;
