<template>
  <div class="container grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-10">
    <Sidebar class="border-r" />
    <main class="mx-auto w-full pb-5 md:max-w-2xl lg:max-w-full">
      <div
        class="sticky top-0 mb-10 flex w-full items-center justify-between border-b bg-background pb-7 pt-5"
        ref="headerRef"
        :style="styles"
      >
        <h1 class="text-3xl font-bold tracking-tight">{{ $t("appearance") }}</h1>
        <LanguageSwitcher />
      </div>

      <slot />
    </main>
  </div>
  <UiToastToaster />
  <UiVueSonner />
</template>

<script setup>
  import { useOnline } from "~/utils/useOnline";
  import { useFixedHeader } from "vue-use-fixed-header";

  const headerRef = ref(null);
  const { styles } = useFixedHeader(headerRef);

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
  const save = () => {
    useSonner.success("Saved", { description: "Settings saved successfully" });
  };
</script>
