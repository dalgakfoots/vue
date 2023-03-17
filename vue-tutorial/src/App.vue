<script>
import TemplateSyntax from "./essentials/template-syntax.vue";
import ReactivityFundamentals from "./essentials/reactivity-fundamentals.vue";
import Computed from "./essentials/computed.vue";
import ClassAndStyle from "./essentials/class-and-style.vue";
import Conditional from "./essentials/conditional.vue";
import List from "./essentials/list.vue";
import EventHandling from "./essentials/event-handling.vue";
export default {
  components: {
    TemplateSyntax,
    ReactivityFundamentals,
    Computed,
    ClassAndStyle,
    Conditional,
    List,
    EventHandling,
  },
};
</script>

<template>
  <!-- <TemplateSyntax/>
  <ReactivityFundamentals/> 
  <Computed/>
  <ClassAndStyle class="baz"/>
  <Conditional/>
  <List/>-->
  <EventHandling />
</template>
