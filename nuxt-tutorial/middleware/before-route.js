export default defineNuxtRouteMiddleware((to, from) => {
  // Route 미들웨어
  if (!to.params.id || to.params.id === "1") {
    return abortNavigation();
  }
});
