<script>
import TemplateSyntax from "./essentials/template-syntax.vue";
import ReactivityFundamentals from "./essentials/reactivity-fundamentals.vue";
import Computed from "./essentials/computed.vue";
import ClassAndStyle from "./essentials/class-and-style.vue";
import Conditional from "./essentials/conditional.vue";
import List from "./essentials/list.vue";
import EventHandling from "./essentials/event-handling.vue";
import Forms from "./essentials/forms.vue";
import Watchers from "./essentials/watchers.vue";
import Refs from "./essentials/template-refs.vue";
import Props from "./componentsAdvance/Props.vue";
import Events from "./componentsAdvance/Events.vue";
import Vmodel from "./componentsAdvance/Vmodel.vue";
import Slot from "./componentsAdvance/Slot.vue";
import ProvideInject from "./componentsAdvance/ProvideInject.vue";
import AsyncComponent from "./componentsAdvance/AsyncComponent.vue";
import Composables from "./reusability/Composables.vue";
import CustomDirectives from "./reusability/CustomDirectives.vue";
import StateManagement from "./scalingUp/StateManagement.vue";
export default {
  components: {
    TemplateSyntax,
    ReactivityFundamentals,
    Computed,
    ClassAndStyle,
    Conditional,
    List,
    EventHandling,
    Forms,
    Watchers,
    Refs,
    Props,
    Events,
    Vmodel,
    Slot,
    ProvideInject,
    AsyncComponent,
    Composables,
    CustomDirectives,
    StateManagement,
  },
};
</script>

<template>
  <!-- 
  https://v3-docs.vuejs-korea.org/guide/essentials/template-syntax.html
  <TemplateSyntax/>
  <ReactivityFundamentals/> 
  <Computed/>
  <ClassAndStyle class="baz"/>
  <Conditional/>
  <List/>
  <EventHandling />
  <Forms />
  <Watchers />
  <Refs />
  -->
  <!-- 
  https://v3-docs.vuejs-korea.org/guide/components/registration.html  
  <Props /> 
  <Vmodel />
  <Slot />
  <ProvideInject />
  <AsyncComponent />
  -->
  <!-- 
  https://v3-docs.vuejs-korea.org/guide/reusability/composables.html
  <Composables />
  <CustomDirectives />-->

  <!-- https://v3-docs.vuejs-korea.org/guide/scaling-up/sfc.html
  <StateManagement /> -->
</template>
