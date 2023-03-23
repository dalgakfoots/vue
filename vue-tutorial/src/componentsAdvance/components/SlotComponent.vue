<script>
export default {};
</script>
<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <button class="fancy-btn">
        <slot>대체컨텐츠</slot>
      </button>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
  <slot name="greeting" :text="greetingMessage" :count="1" />
</template>
