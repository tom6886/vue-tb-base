import Vue from "vue";
import Vuex from "vuex";
import Cookies from "js-cookie";
import { router } from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    logOut(): void {
      Cookies.remove("accessToken");
      router.push({
        name: "login"
      });
    }
  }
});
