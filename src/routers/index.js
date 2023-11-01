import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "map",
      component: () => import("../views/Map.vue"),
    },
    {
        path: "/detail",
        name: "detail",
        component: () => import("../views/DetailArea.vue"),
    },
    {
      path: "/beforemap",
      name: "beforemap",
      component: () => import("../views/BeforeMap.vue"),
  },
  ],
});

export default router