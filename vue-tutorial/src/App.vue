<script>
  import TemplateSyntax from './essentials/template-syntax.vue';
  import ReactivityFundamentals from './essentials/reactivity-fundamentals.vue';
  import Computed from './essentials/computed.vue';
  import ClassAndStyle from './essentials/class-and-style.vue';
  import Conditional from './essentials/conditional.vue';
  import List from './essentials/list.vue';
  export default {
    components : {
      TemplateSyntax,
      ReactivityFundamentals,
      Computed,
      ClassAndStyle,
      Conditional,
      List
    }
  }
</script>

<template>
  <!-- <TemplateSyntax/>
  <ReactivityFundamentals/> 
  <Computed/>
  <ClassAndStyle class="baz"/>
  <Conditional/>-->
  <List/>
</template>
