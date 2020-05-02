import Vue from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import store from "./store/index";
import { post, get, upload } from "@/utils/api";
import "view-design/dist/styles/iview.css";
import { Button, Form, FormItem, Icon, Input, Modal } from "view-design";
import "@babel/polyfill";

Vue.config.productionTip = false;

Vue.component("Button", Button);
Vue.component("Form", Form);
Vue.component("FormItem", FormItem);
Vue.component("Icon", Icon);
Vue.component("Input", Input);
Vue.component("Modal", Modal);

Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$upload = upload;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
