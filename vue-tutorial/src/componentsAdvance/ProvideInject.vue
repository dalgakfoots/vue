<script>
import ProvideInjectComponent from "./components/ProvideInjectComponent.vue";
import { computed } from "vue";
import { myInjectionKey } from "./components/ProvideInjectUsingSymbol.js";
export default {
  data() {
    return {
      message: "Hello Vue!",
      reactiveMessage: "Reactive message",
    };
  },
  provide() {
    return {
      message: this.message,
      // 반응형으로 주입을 하려면 computed() 함수를 사용해야 한다.
      reactiveMessage: computed(() => this.reactiveMessage),
      [myInjectionKey]: {
        usingSymbol: "symbol test",
      },
    };
  },
  components: { ProvideInjectComponent },
};
</script>
<template>
  <input v-model="reactiveMessage" />
  <ProvideInjectComponent />
</template>
