<script>
import EventsComponent from "./components/EventsComponent.vue";
export default {
  components: {
    EventsComponent,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    callback() {
      console.log("부모가 전달하는 메서드");
    },
    increaseCount(n) {
      this.count += n;
    },
  },
};
</script>
<template>
  {{ count }}
  <hr />
  <!-- 자식 컴포넌트에서 설정한 emit의 이름을 prop으로 하여 전달  -->
  <!-- camelCase 형식으로 이름을 설정했지만, kebab-case 표기로도 가능하며 이를 권장한다. -->
  <EventsComponent @some-event="callback" />
  <hr />
  <!-- .once 수식어 가능 -->
  <EventsComponent @some-event.once="callback" />
  <hr />
  <EventsComponent @increase-by="increaseCount" />
</template>
