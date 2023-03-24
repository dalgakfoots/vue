<script>
import { store } from "./store";
import { useCount } from "./storeGlobalAndLocal";

const { globalCount, localCount } = useCount();

export default {
  data() {
    return {
      store,
      localCount,
      globalCount,
    };
  },
};
</script>
<template>
  <div>
    localCount : {{ this.localCount }} / globalCount : {{ globalCount }}
    <button @click="store.increment">A 컴포넌트 : {{ store.count }}</button>
    <button @click="localCount++">localCount ++</button>
    <button @click="globalCount++">globalCount ++</button>
  </div>
</template>
