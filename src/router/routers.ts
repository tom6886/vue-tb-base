import Main from "../views/Main.vue";

export const page404 = {
  path: "/*",
  name: "error-404",
  meta: {
    title: "404-页面不存在"
  },
  component: () => import("@/views/error-page/404.vue")
};

export const appRouter = [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Login - 登录"
    },
    component: () => import("@/views/Login.vue")
  },
  {
    path: "/",
    component: Main,
    children: []
  }
];

export default [...appRouter, page404];
