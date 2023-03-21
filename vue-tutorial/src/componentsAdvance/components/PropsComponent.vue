<script>
import { stringifyExpression } from "@vue/compiler-core";

export default {
  props: {
    greetingMessage: String,
    foo: String,
    initialCounter: Number,
    size: String,

    propA: Number, // 기본 타입 체크
    propB: [String, Number], // 여러타입 허용
    propC: {
      // 문자열 필수
      type: String,
      required: true,
    },
    propD: {
      // 기본값을 가지는 숫자형
      type: Number,
      default: 100,
    },
    propE: {
      // 기본값을 가지는 객체
      type: Object,
      default(rawProps) {
        // rawProps : 부모 컴포넌트에게 받은 props 전체 객체
        return { message: "안녕" };
      },
    },
    propF: {
      // 사용자 정의 유효성 검사 함수
      validator(value) {
        // 다음 문자열 중 하나와 일치해야 한다.
        return ["성공", "경고", "위험"].includes(value);
      },
    },
    propG: {
      // 기본값이 있는 함수
      type: Function,
      default() {
        // 기본값으로 사용할 함수
        return "Default function";
      },
    },
  },
  data() {
    return {
      counter: this.initialCounter, // 전달받은 prop 을 통해 로컬 데이터 속성을 정의
    };
  },
  created() {
    //this.foo = "bar"; // props 는 읽기 전용이다
  },

  computed: {
    normalizedSize() {
      // prop이 변경될 때, 계산된 속성을 통해 자동으로 업데이트 된다.
      return this.size.trim().toLowerCase();
    },
  },
};
</script>
<template>
  <span>{{ greetingMessage }}</span>
</template>
