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

  const title = ref("ADMIN DASHBOARD");
  const description = ref("Consulter le tableau de board de notre application après connexion.");
  const img = "/icon.jpg";

  useSeoMeta({
    title: title.value,
    titleTemplate: "%s | DATTEBAYO",
    description: description.value,
    ogTitle: title.value,
    ogDescription: description.value,
    ogImage: img,
    twitterTitle: title.value,
    twitterDescription: description.value,
    twitterImage: img,
    twitterCard: "summary_large_image",
  });

  useHead({
    htmlAttrs: {
      lang: "fr",
    },
    link: [
      {
        rel: "icon",
        type: "image/jpg+xml",
        href: "/icon.jpg",
      },
    ],
  });

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
