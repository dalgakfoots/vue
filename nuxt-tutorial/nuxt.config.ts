// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/getting-started/configuration
export default defineNuxtConfig({
  runtimeConfig: {
    // Server-side 에서만 사용 가능한 private Key
    apiSecret: "123",
    // public key 또한 Server-side 에서만 사용 가능하다.
    public: {
      apiBase: "/api",
    },
  },
});

// 이후 어플리케이션에서 아래와 같이 사용할 수 있다.
/**
 *
 * <script setup>
 * const runtimeConfig = useRuntimeConfig()
 * </script>
 *
 */
