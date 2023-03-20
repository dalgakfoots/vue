<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5],
    };
  },
  mounted() {
    // ref 값은 this.$refs에 노출된다.
    // 컴포넌트가 마운트 된 후에만 ref에 접근할 수 있다.
    this.$refs.input.focus();
    console.log(this.$refs.items);
  },
};
</script>
<template>
  <!-- DOM 엘리먼트에 직접 접근해야 하는 경우에 사용한다. -->
  <!-- DOM 엘리먼트 또는 자식 컴포넌트 인스턴스에 직접적인 참조를 얻을 수 있다. -->
  <!-- 예를 들어 컴포넌트 마운트의 인풋에 초점을 맞추거나 -->
  <!-- 엘리먼트에서 서드파티 라이브러리를 초기화 하려는 경우 사용한다. -->
  <input ref="input" />
  <hr />

  <ul>
    <!-- ref 가 v-for 안에서 사용되면 ref 값은 해당 엘리먼트를 포함하는 배열이 된다. -->
    <!-- 이때 생성된 배열은 소스배열과 동일한 순서를 보장하지 않는다. -->
    <li v-for="item in list" ref="items">
      {{ item }}
    </li>
  </ul>

  <hr />
  <input :ref="(el) => {}" />
</template>
