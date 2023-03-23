<script>
import SlotComponent from "./components/SlotComponent.vue";
import SlotComponent2 from "./components/SlotComponent2.vue";
export default {
  data() {
    return {
      message: "안녕?",
    };
  },
  components: {
    SlotComponent,
    SlotComponent2,
  },
};
</script>
<template>
  <SlotComponent> 클릭하기 </SlotComponent>
  <hr />
  <span>{{ message }}</span> <br />
  <SlotComponent>{{ message }}</SlotComponent>
  <hr />
  <SlotComponent />
  <SlotComponent>부모가 슬롯 컨텐츠를 전달</SlotComponent>
  <hr />
  <SlotComponent>
    <template #header>
      <h1>헤더 슬롯의 컨텐츠</h1>
    </template>
    <template #default>주요 내용에 대한 컨텐츠</template>
    <template #footer>
      <p>푸터 슬롯의 컨텐츠</p>
    </template>
  </SlotComponent>
  <hr />
  <SlotComponent2 v-slot="slotProps">
    {{ slotProps.text }} {{ slotProps.count }}
  </SlotComponent2>
  <hr />
  <template>
    <SlotComponent2>
      <template #main="{ message }">
        <p>{{ message }}</p>
      </template>
      <template #footer>
        <p>footer</p>
      </template>
    </SlotComponent2>
  </template>
</template>
