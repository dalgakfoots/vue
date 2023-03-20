<script>
import BlogPost from "./component/BlogPost.vue";
import ButtonCounter from "./component/ButtonCounter.vue";
import AlertBox from "./component/AlertBox.vue";
import Home from "./component/dynamic/Home.vue";
import Posts from "./component/dynamic/Posts.vue";
import Archive from "./component/dynamic/Archive.vue";
export default {
  components: {
    ButtonCounter,
    BlogPost,
    AlertBox,
    Home,
    Posts,
    Archive,
  },

  data() {
    return {
      posts: [
        { id: 1, title: "Vue와 함께한 나의 여행" },
        { id: 2, title: "Vue로 블로깅하기" },
        { id: 3, title: "Vue가 재미있는 이유" },
      ],
      postFontSize: 1,
      currentTab: "Home",
      tabs: ["Home", "Posts", "Archive"],
    };
  },
};
</script>

<template>
  <h1>아래에 자식 컴포넌트가 있습니다.</h1>
  <!-- 각 버튼은 독립적인 count 를 유지한다. -->
  <!-- 컴포넌트를 사용할 때 마다 해당 컴포넌트의 새 인스턴스가 생성되기 때문이다. -->
  <ButtonCounter />
  <ButtonCounter />
  <ButtonCounter />

  <hr />
  <BlogPost v-for="post in posts" :key="post.id" :title="post.title" />

  <hr />
  <div :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 0.1"
    />
  </div>

  <hr />
  <AlertBox> 나쁜 일이 일어났습니다. </AlertBox>

  <hr />
  <div class="demo">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component :is="currentTab" class="tab"></component>
  </div>
</template>
<style>
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
