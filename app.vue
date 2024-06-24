<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
      <UiToastToaster />
      <UiVueSonner />
    </NuxtLayout>
  </div>
</template>

<script setup>
  import { useOnline } from "~/utils/useOnline";

  // Watch for changes in online status and show notification
  watch(isOnline, (online) => {
    if (!online) {
      push.error({
        title: "Connexion",
        message: "Vous n'êtes pas connecté à Internet.",
      });
    }
  });
</script>
