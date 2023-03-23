<script>
import { myInjectionKey } from "./ProvideInjectUsingSymbol.js";
export default {
  inject: {
    messaga: {
      // 로컬 키
      from: "message", // 주입 된 키
      default: "이것은 기본 값 문자열 입니다.",
    },
    user: {
      default: () => ({ name: "철수" }),
    },
    reactiveMessage: {
      from: "reactiveMessage",
      default: "none",
    },
    usingSymbol: {
      from: myInjectionKey,
      default: { usingSymbol: "default symbol" },
    },
  },
};
</script>
<template>
  <p>손자에게 전하는 메시지 : {{ messaga }}</p>
  <p>반응형 메시지 : {{ reactiveMessage }}</p>
  <p>심볼 사용 : {{ usingSymbol.usingSymbol }}</p>
</template>
