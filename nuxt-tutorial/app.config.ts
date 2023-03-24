// https://nuxt.com/docs/getting-started/configuration
// 빌드 시에 결정되는 전역변수를 선언할 수 있다.

export default defineAppConfig({
  title: "Hello Nuxt",
  theme: {
    dark: true,
    colors: {
      primary: "#ff0000",
    },
  },
});

// 이후 어플리케이션에서 아래와 같이 사용할 수 있다.
/**
 * <script setup>
 * const appConfig = useAppConfig()
 * </setup>
 */
