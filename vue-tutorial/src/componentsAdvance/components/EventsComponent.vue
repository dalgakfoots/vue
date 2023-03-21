<script>
export default {
  methods: {
    submit() {
      this.$emit("someEvent");
    },

    submitForm(email, password) {
      this.$emit("submit", { email, password });
    },
  },

  emits: {
    // 이벤트 유효성 검사
    click: null, // 클릭은 유효성 검사 없음
    submit: ({ email, password }) => {
      // submit 이벤트 유효성 검사
      if (email && password) {
        return true;
      } else {
        console.warn("submit 이벤트 페이로드가 옳지 않음");
        return false;
      }
    },
  },
};
</script>
<template>
  <button @click="$emit('someEvent')">클릭하기</button>
  <!-- 이벤트를 위한 인자 사용 -->
  <button @click="$emit('increaseBy', 1)">Increase by 1</button>
</template>
