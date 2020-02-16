<template>
  <error-content code="404" desc="Oh~~您的页面好像飞走了~" :src="src" />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import error404 from "../../assets/images/error-page/error-404.svg";
import errorContent from "./error-content.vue";

@Component({
  name: "error_404",
  components: {
    errorContent
  }
})
export default class extends Vue {
  private src: any = error404;
}
</script>

<style scoped></style>
