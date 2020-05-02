import { RouteConfig } from "vue-router";

export const page404: RouteConfig = {
  path: "/*",
  name: "error-404",
  meta: {
    title: "404-页面不存在",
  },
  component: () => import("@/views/error-page/404.vue"),
};

export const appRouter: RouteConfig[] = [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Login - 登录",
    },
    component: () => import("@/views/login/Login.vue"),
  },
];

export default [...appRouter, page404];
