<script>
import VmodelComponent from "./components/VmodelComponent.vue";

export default {
  data() {
    return {
      searchText: "",
    };
  },
  components: { VmodelComponent },
};
</script>
<template>
  <input v-model="searchText" />
  <hr />
  <VmodelComponent v-model="searchText" v-model.capitalize="searchText" />
</template>
