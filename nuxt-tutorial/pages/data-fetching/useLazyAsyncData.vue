<script setup>
const { pending, data: count } = useLazyAsyncData("count", () =>
  $fetch("/api/count")
);
watch(count, (newCount) => {});

const refresh = () => refreshNuxtData("count");
</script>

<template>
  <div>
    {{ pending ? "loading" : count }}
    <button @click="refresh">REFRESH</button>
  </div>
</template>
