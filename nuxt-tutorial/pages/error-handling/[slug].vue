<script setup>
const route = useRoute();
const { data } = await useFetch(`/api/count`);

if (data) {
  throw createError({
    statusCode: 404,
    statusMessage: "make error intentionally",
  });
}
</script>
<template>
  {{ data }}
</template>
