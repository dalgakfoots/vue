<script>
export default {
  data() {
    return {
      count: 0,
      name: "Vue.js",
    };
  },
  methods: {
    greet(event) {
      alert(`안녕 ${this.name}!`);
      if (event) {
        alert(event.target.tagName);
      }
    },
    say(message) {
      alert(message);
    },
    warn(message, event) {
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },
  },
};
</script>
<template>
  <button @click="count++">1 추가</button>
  <p>숫자 값은 : {{ count }}</p>
  <hr />
  <button @click="greet">환영하기</button>
  <hr />
  <button @click="say('안녕')">안녕이라고 말하기</button>
  <button @click="say('잘가')">잘가라고 말하기</button>
  <hr />

  <!-- 이벤트 객체 접근 -->
  <button @click="warn('아직 양식을 제출할 수 없습니다.', $event)">
    제출하기
  </button>
  <button @click="(event) => warn('아직 양식을 제출할 수 없습니다.', event)">
    제출하기
  </button>

  <!-- 이벤트 수식어 -->
  <a @click.stop="doThis">
    <!-- 클릭 이벤트 전파가 중지된다. -->
  </a>
  <form @submit.prevent="onSubmit">
    <!-- submit 이벤트가 페이지를 리로드 하지 않는다. -->
  </form>
  <a @click.stop.prevent="doThat">
    <!-- 수식어는 연결 가능하다 -->
  </a>
  <form @submit.prevent>
    <!-- 핸들러 없이 수식어 만 사용 가능하다. -->
  </form>
  <div @click.self="doThat">
    <!-- event.target 이 엘리먼트 자신일 경우에만 핸들러가 실행된다. -->
  </div>

  <div @click.capture="doThis">
    <!-- 내부 엘리먼트에서 클릭 이벤트 핸들러가 실행되기 전에
    여기에서 먼저 핸들러가 동작한다.
    -->
  </div>

  <a @click.once="doThis">
    <!-- 클릭 이벤트가 단 한 번만 실행된다. -->
  </a>

  <div @scroll.passive="onScroll">
    <!-- 핸들러 내 preventDefault() 가 포함되었더라도,
    스크롤 이벤트의 기본동작(스크롤) 이 발생환다.
    -->
  </div>

  <!-- 입력키가 Enter 일때만 submit 을 호출한다. -->
  <input @keyup.enter="submit" />

  <!-- 입력키가 PageDown 일때만 호출한다. -->
  <input @keyup.page-down="onPageDown" />

  <!-- Alt + Enter -->
  <input @keyup.alt.enter="clear" />

  <!-- Ctrl + Click -->
  <div @click.ctrl="doSomething">시작하기</div>

  <!-- .exact 수식어 -->

  <!-- 오직 Ctrl 만 누른 상태에서 클릭해야 실행 -->
  <button @click.ctrl.exact="onCtrlClick">A</button>
  <!-- 시스템 입력키를 누르지 않고 클릭해야지 실행 -->
  <button @click.exact="onClick">A</button>
</template>
