<script setup>
definePageMeta({
  // /middleware 디렉토리 밑에 존재하는 미들웨어 사용
  middleware: "before-route",
  validate: async (route) => {
    // return 값(boolean)에 따라 404 에러 발생
    return /^\d+$/.test(route.params.id);
  },
});

const route = useRoute();

console.log(route.params.id);
</script>
<template>
  <p>
    {{ $route.params.id }}
  </p>
</template>
