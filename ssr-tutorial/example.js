// 서버의 node.js 에서 실행된다.
import { createSSRApp } from "vue";
// Vue 의 서버 렌더링 API 는 vue/server-renderer 에 있음.
import { renderToString } from "vue/server-renderer";

const app = createSSRApp({
  data: () => ({ count: 1 }),
  template: `<button @click="count++">{{count}}</button>`,
});

renderToString(app).then((html) => {
  console.log(html);
});
