<script>
  export default {
    data() {
      return {
        isButtonDisabled : '',
        objectOfAttrs : {
          id : 'container',
          class : 'wrapper'
        },
        number : 10,
        seen : true,
        url : 'http://localhost:5173',
        attributeName : 'href'
      }
    }
  }
</script>

<template>
  <span>메시지 : {{ msg }}</span>

  <div v-bind:id="dynamicId"></div>
  <div v-bind="objectOfAttrs"></div>
  <button :disabled="isButtonDisabled">버튼</button>

  {{ number + 1  }}

  <div :id="`list-${number}`">d</div>

  <p v-if="seen">you can see me</p>

  <a :href="url"> ... </a>

  <a :[attributeName]="url"> !!! </a>
</template>
