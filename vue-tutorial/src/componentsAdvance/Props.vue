<script>
import PropsComponent from "./components/PropsComponent.vue";
import BlogPost from "../essentials/component/BlogPost.vue";
export default {
  components: {
    PropsComponent,
    BlogPost,
  },

  data() {
    return {
      post: {
        id: 1,
        title: "오늘은 무슨 요일인가요?",
      },
    };
  },
};
</script>
<template>
  <!-- props를 전달할 때는 관례적으로 kebab-case 로 표기해서 사용한다. -->
  <PropsComponent greeting-message="Hello?" />
  <hr />
  <BlogPost :likes="42" />
  <BlogPost is-published />
  <BlogPost :is-published="false" />
  <BlogPost :comment-ids="[234, 266, 273]" />
  <BlogPost
    :author="{
      name: 'dgfoot',
      company: 'oldtoyoung',
    }"
  />
  <BlogPost v-bind="post" />
</template>
