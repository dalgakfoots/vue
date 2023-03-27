<script setup>
const counter = useState("counter", () => Math.round(Math.random() * 1000));
const color = useColor();
const cnumber = useCounter();
</script>

<template>
  <div>
    Counter : {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
  <div>
    <p>current Color : {{ color }}</p>
    <p>current cunumber : {{ cnumber }}</p>
  </div>
  <div>
    <button @click="cnumber++">cnumber++</button>
  </div>
</template>
