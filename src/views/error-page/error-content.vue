<template>
  <div class="error-page">
    <div class="content-con">
      <img :src="src" :alt="code" />
      <div class="text-con">
        <h4>{{ code }}</h4>
        <h5>{{ desc }}</h5>
      </div>
      <back-btn-group class="back-btn-group"></back-btn-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import backBtnGroup from "./back-btn-group.vue";

@Component({
  name: "error_content",
  components: {
    backBtnGroup
  }
})
export default class extends Vue {
  @Prop(String) code!: string;
  @Prop(String) desc!: string;
  @Prop(String) src!: string;
}
</script>

<style scoped></style>
