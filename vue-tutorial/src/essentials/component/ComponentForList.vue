<script>
export default {
  props: {
    item: Object,
    index: Number,
  },
};
</script>
<template>
  <h2>{{ item ? "prop is on" : "not arrive" }}</h2>
  <p>{{ item || "it is component" }}</p>
</template>
