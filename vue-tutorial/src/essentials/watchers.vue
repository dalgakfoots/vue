<script>
export default {
  data() {
    return {
      question: "",
      answer: "질문에는 일반적으로 물음표가 포함됩니다.",
      count: 0,
    };
  },

  created() {
    // 감시자를 선언적으로 생성할 수도 있다.
    // 감시자를 조건부로 설정해야 하거나, 사용자 상호작용에 대한 응답으로만
    // 무언가를 감시해야할 때 유용하다. 또한 감시자를 조기에 중지할 수 있다.
    const unwatch = this.$watch("question", (newQuestion) => {});
    unwatch();
  },

  watch: {
    // 질문이 변경될 때 마다 이 함수가 실행됩니다.
    question(newQuestion, oldQuestion) {
      if (newQuestion.indexOf("?") > -1) {
        this.getAnswer();
      }
    },

    someObject: {
      // 깊은 감시자 : 감시된 객체의 모든 중첩 속성을 탐색한다.
      handler(newValue, oldValue) {},
      deep: true,
    },

    questionA: {
      // 열성적인 감시자 : 콜백이 즉시 실행되도록 한다. created 훅 직전에 발생한다.
      handler(newQuestion) {},
      immediate: true,
    },

    key: {
      // 기본적으로 개발자가 생성한 감시자 콜백은
      // Vue 컴폰너트가 업데이트 되기 전에 실행된다.
      // Vue 에 의해 업데이트 된 후의 DOM 을 감시자 콜백에서 접근하려면
      // flush : 'post' 옵션을 지정한다.
      handler() {},
      flush: "post", //'pre' | 'post' | 'sync'
    },

    count: {
      handler(val, preVal) {
        console.log("변경 감지", val, preVal);
      },
      // 동일한 틱 내에서 여러번 상태 변경 시마다 동기적으로 콜백을 호출해야 하는 경우
      // sync 옵션을 사용한다.
      flush: "sync",
    },
  },
  methods: {
    async getAnswer() {
      this.answer = "생각 중...";
      try {
        const res = await fetch("https://yesno.wtf/api");
        this.answer = (await res.json()).answer === "yes" ? "네" : "아니오";
      } catch (e) {
        this.answer = "에러 : API에 연결할 수 없습니다. " + e;
      }
    },

    increment() {
      this.count++;
      // callback 실행
      this.count++;
      // callback 실행
      this.count++;
      // callback 실행
    },
  },
};
</script>
<template>
  <p>
    예/아니오 질문 :
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
  <hr />
  <button @click="increment">sync 테스트</button>
  {{ count }}
</template>
