<script setup>
// 에러 상황 발생 시, ~/error.vue 가 호출된다.
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <button @click="handleError">Clear error</button>
</template>
