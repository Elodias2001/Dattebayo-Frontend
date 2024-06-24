<template>
  <div>
    <SettingsLogo />
    <UiSeparator class="my-10" />
    <SettingsBrandColor />
    <UiSeparator class="my-10" />
    <SettingsTheme />
    <UiSeparator class="my-10" />
    <SettingsSidebar />
    <UiSeparator class="my-10" />
    <SettingsSidebarFeature />
    <UiSeparator class="my-10" />
    <SettingsTables />
    <UiSeparator class="my-10" />
    <div class="flex items-start gap-3">
      <UiButton @click="save">{{ $t("save") }}</UiButton>
      <UiButton variant="outline">{{ $t("cancel") }}</UiButton>
    </div>
    <div class="fixed bottom-5 right-5 lg:hidden">
      <ClientOnly>
        <SidebarMobile />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
  useHead({
    title: "PANEL ADMIN",
  });

  definePageMeta({
    middleware: ["auth"],
  });
</script>
