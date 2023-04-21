import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/Layout.vue";

Vue.use(VueRouter);

const routes = [
    {
      path: "/",
      name:"Layout",
      component: Layout,
      children:[
        // {
        //   path: "dashboard",
        //   name: "dashboard",
        //   component: () => import("@/components/Dashboard.vue"),
        // },
        {
          path: "view ",
          name: "view-user",
          component: () => import("@/components/User/ViewUser.vue"),
        },
        {
          path: "add-user/:id?",
          name: "add-user",
          component: () => import("@/components/User/AddUser.vue"),
        },
        
      ],
    },
    
    {
      path: "/login",
      name: "login",
      component: () => import("@/Login"),
    },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router