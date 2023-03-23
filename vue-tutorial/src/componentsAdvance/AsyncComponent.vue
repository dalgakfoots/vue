<script>
import { defineAsyncComponent } from "vue";
import LoadingComponent from "./components/LoadingComponent.vue";
import ErrorComponent from "./components/ErrorComponent.vue";
export default {
  components: {
    // 전역등록 가능. https://v3-docs.vuejs-korea.org/guide/components/async.html#basic-usage 참고
    AdminPage: defineAsyncComponent({
      loader: () => import("./components/AsyncComponentComponent.vue"),

      // 비동기 컴포넌트가 로드되는 동안 사용할 로딩 컴포넌트
      loadingComponent: LoadingComponent,
      delay: 200, // 기본값 200ms

      // 로드 실패 시 사용할 에러 컴포넌트
      errorComponent: ErrorComponent,
      timeout: 3000, // 기본값 : 무한대
    }),
  },
};
</script>
<template>
  <AdminPage />
</template>
