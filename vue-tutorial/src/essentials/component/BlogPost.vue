<script>
export default {
  props: ["title"],
  // 컴포넌트가 내보내는 모든 이벤트를 문서화하고, 선택적으로 유효성검사를 한다.
  // Vue 가 자식 컴포넌트의 루트 엘리먼트에 암시적으로 네이티브 리스너가 적용되는 것을 방지한다.
  emits: ["enlarge-text"],
};
</script>
<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">텍스트확대</button>
  </div>
</template>
