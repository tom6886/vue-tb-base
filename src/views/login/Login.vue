<template>
  <div class="login-container">
    <div class="login-weaper animated bounceInDown">
      <div class="login-left">
        <div class="login-time">
          {{ time }}
        </div>
        <img class="img" src="/img/logo.png" alt="" />
        <p class="title">
          代开代征监管系统
        </p>
      </div>
      <div class="login-border">
        <div class="login-main">
          <h4 class="login-title">登录</h4>
          <userLogin />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Cookies from "js-cookie";
import { IR } from "@/model/common";
import { ILoginUser } from "@/model/login";
import { Form } from "view-design";
import { dateFormat } from "@/utils/date";
import UserLogin from "@/components/login/User-Login.vue";

@Component({
  components:{
    UserLogin
  }
})
export default class Login extends Vue {
  private time: string = "";
  private loading: boolean = false;
  private loginBtn: string = "登录";
  private user: ILoginUser = {
    userName: "",
    password: ""
  };
  private loginRules: object = {
    userName: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
    password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
  };

  created() {
    this.getTime();
    setInterval(() => {
      this.getTime();
    }, 1000);
  }

  // sublogin() {
  //   const _this = this;
  //   _this.$refs.loginForm.validate(valid => {
  //     if (valid) {
  //       _this.loading = true;
  //       _this.login();
  //     } else {
  //       _this.$Message.error("用户名或密码不能为空，请完善表单");
  //     }
  //   });
  // }

  // async login() {
  //   let res = await this.$post("/system/user/login", this.user);

  //   if (res.code !== 0) {
  //     this.$Message.error(res.msg);
  //     this.loading = false;
  //     return;
  //   }

  //   Cookies.set("accessToken", res.data);
  //   this.$router.push({
  //     name: "map"
  //   });
  // }

  getTime() {
    this.time = dateFormat(new Date());
  }
}
</script>

<style lang="scss">
@import "@/styles/login.scss";
</style>
