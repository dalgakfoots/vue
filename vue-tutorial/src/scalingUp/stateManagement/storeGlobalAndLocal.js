import { ref } from "vue";

// 모듈 범위에서 생성된 전역 상태
const globalCount = ref(1);

export function useCount() {
  // 로컬 상태 , 컴포넌트 별로 생성된 상태
  const localCount = ref(1);

  return {
    globalCount,
    localCount,
  };
}
