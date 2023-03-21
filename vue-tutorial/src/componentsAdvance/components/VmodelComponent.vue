<script>
export default {
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({}),
    },
  },
  emits: ["update:modelValue"],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },

  methods: {
    emitValue(e) {
      let value = e.target.value;
      if (this.modelModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1);
      }
      this.$emit("update:modelValue", value);
    },
  },
};
</script>
<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />

  <input v-model="value" />
  <input type="text" :value="modelValue" @input="emitValue" />
</template>
