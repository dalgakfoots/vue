<script>
export default {
  data() {
    return {
      greetingMessage: "Hello!!",
    };
  },
};
</script>
<template>
  <div>
    <slot :text="greetingMessage" :count="1" />
    <header>
      <slot name="header" message="안녕 header" />
    </header>
    <main>
      <slot name="main" message="안녕 main" />
    </main>
    <footer>
      <slot name="footer" message="안녕 footer" />
    </footer>
  </div>
</template>
