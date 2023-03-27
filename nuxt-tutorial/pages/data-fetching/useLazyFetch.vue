<script setup>
const { pending, data: posts } = useLazyFetch("/api/posts");
watch(posts, (newPosts) => {
  console.log(posts);
  console.log(newPosts);
});
</script>

<template>
  <div v-if="pending">Loading...</div>
  <div v-else>
    <div v-for="post in posts">
      {{ post.title }}
    </div>
  </div>
</template>
