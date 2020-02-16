<template>
  <div>
    <Button size="large" type="text" @click="backHome">返回首页</Button>
    <Button size="large" type="text" @click="backPrev"
      >返回上一页({{ second }}s)</Button
    >
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "backBtnGroup"
})
export default class extends Vue {
  private second: number = 5;
  private timer: any = null;

  backHome() {
    this.$router.replace({
      name: this.$config.homeName
    });
  }

  backPrev() {
    this.$router.go(-1);
  }

  mounted() {
    this.timer = setInterval(() => {
      if (this.second === 0) this.backPrev();
      else this.second--;
    }, 1000);
  }

  beforeDestroy() {
    clearInterval(this.timer);
  }
}
</script>

<style lang="less" scoped>
@import "./error.less";
</style>
