import VueRouter, { Route } from "vue-router";

declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter; // 这表示this下有这个东西
    $route: Route;
    $config: any;
    $post: any;
    $get: any;
    $upload: any;
  }
}