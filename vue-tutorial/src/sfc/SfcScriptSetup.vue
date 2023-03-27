<script setup>
// 내부에 선언된 모든 최상위 바인딩 (변수 , 함수 선언 및 import 포함)
// 은 템플릿에서 직접 사용할 수 있다.
import { ref } from "vue";
import SfcComponent from "./components/SfcComponent.vue";
import Foo from "./components/SfcFoo.vue";
import Bar from "./components/Sfcbar.vue";
import { capitalize } from "./composables/SfcMethods.js";

const msg = "hello";
const count = ref(0);
const someCondition = ref(true);

const log = () => {
  console.log(msg);
};
</script>
<template>
  <button @click="log">{{ capitalize(msg) }}</button>
  <SfcComponent />
  <hr />
  <!-- <template> 안에서 ref 는 언래핑 되어 .value 없이 접근 가능 -->
  <button @click="count++">{{ count }}</button>
  <hr />
  <component :is="Foo" /> <br />
  <component :is="someCondition ? Foo : Bar" />
  <hr />
</template>
