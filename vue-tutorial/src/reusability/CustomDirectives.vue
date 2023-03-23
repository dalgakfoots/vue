<script>
const focus = {
  mounted: (el) => el.focus(),
};

const myDirective = {
  // 바인딩된 엘리먼트의 속성 또는
  // 이벤트 리스너가 적용되기 전에 호출됩니다.
  created(
    el, // 디렉티브가 바인딩 된 엘리먼트
    binding, // 속성을 포함하는 객체 {value , oldvalue , arg , modifiers , instance , dir}
    vnode, // 바인딩 된 엘리먼트를 나타내는 기본 VNode
    prevVnode // 이전 렌더링에서 바인딩 된 엘리먼트를 나타내는 VNode
  ) {
    // 인자에 대한 자세한 내용은 아래를 참고.
  },
  // 엘리먼트가 DOM에 삽입되기 직전에 호출됩니다.
  beforeMount(el, binding, vnode, prevVnode) {},
  // 바인딩된 엘리먼트의 부모 컴포넌트 및
  // 모든 자식 컴포넌트의 mounted 이후에 호출됩니다.
  mounted(el, binding, vnode, prevVnode) {},
  // 부모 컴포넌트의 updated 전에 호출됩니다.
  beforeUpdate(el, binding, vnode, prevVnode) {},
  // 바인딩된 엘리먼트의 부모 컴포넌트 및
  // 모든 자식 컴포넌트의 updated 이후에 호출됩니다.
  updated(el, binding, vnode, prevVnode) {},
  // 부모 컴포넌트의 beforeUnmount 이후에 호출됩니다.
  beforeUnmount(el, binding, vnode, prevVnode) {},
  // 부모 컴포넌트의 unmounted 전에 호출됩니다.
  unmounted(el, binding, vnode, prevVnode) {},
};

export default {
  directives: {
    focus, // v-focus 로 활성화 가능
  },
};
</script>
<template>
  <input v-focus />
</template>
