export default defineNuxtRouteMiddleware(
  (to, from) => {
    if (!to.path.startsWith("/fr") && !to.path.startsWith("/en")) {
      return redirect("/fr" + to.fullPath);
    }
  },
  { global: true }
);
