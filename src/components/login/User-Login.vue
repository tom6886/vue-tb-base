<template>
  <div>
    <Form ref="loginForm" :model="user" :rules="loginRules">
      <FormItem prop="userName">
        <Input placeholder="请输入用户名" v-model="user.userName">
          <span slot="prepend">
            <Icon :size="16" type="ios-person"></Icon>
          </span>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input
          placeholder="请输入密码"
          v-model="user.password"
          type="password"
          @on-enter="login"
        >
          <span slot="prepend">
            <Icon :size="14" type="md-lock"></Icon>
          </span>
        </Input>
      </FormItem>
    </Form>
    <Button
        type="primary"
        class="wb100"
        :loading="loading"
        @click="sublogin"
        ghost
        long
        >{{ loginBtn }}</Button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { ILoginUser } from "@/model/login";
import { Form } from "view-design";
import Cookies from "js-cookie";

@Component({
  name: "UserLogin",
})
export default class UserLogin extends Vue {
  $refs!: {
    loginForm: Form;
  };

  private loading: boolean = false;
  private loginBtn: string = "登录";
  private user: ILoginUser = {
    userName: "",
    password: "",
  };

  private loginRules: object = {
    userName: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
    password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
  };

  sublogin() {
    const _this = this;
    _this.$refs.loginForm.validate((valid) => {
      if (valid) {
        _this.loading = true;
        _this.login();
      } else {
        _this.$Message.error("用户名或密码不能为空，请完善表单");
      }
    });
  }

  async login() {
    let res = await this.$post("/system/user/login", this.user);

    if (res.code !== 0) {
      this.$Message.error(res.msg);
      this.loading = false;
      return;
    }

    Cookies.set("accessToken", res.data);
    this.$router.push({
      name: "map",
    });
  }
}
</script>

<style></style>
