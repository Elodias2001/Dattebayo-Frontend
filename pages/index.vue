<template>
  <div>
    <UiContainer as="section" class="py-5">
      <div class="flex items-center justify-between gap-5">
        <div>
          <h1 class="text-2xl font-semibold">Posts</h1>
          <p class="mt-1 text-muted-foreground">Consulter les articles</p>
        </div>
        <UiButton size="sm">Load Posts</UiButton>
      </div>
      <UiDivider class="my-10" />
    </UiContainer>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: "site",
  });

  useHead({
    title: "Articles",
    meta: [
      {
        name: "Description",
        content: "Consulter les articles",
      },
    ],
  });
</script>
