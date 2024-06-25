<template>
  <div class="overflow-x-auto rounded-md border pb-4">
    <UiTable>
      <UiTableCaption>La listes des articles</UiTableCaption>
      <UiTableHeader>
        <UiTableRow>
          <UiTableHead class="w-[100px]">ID</UiTableHead>
          <UiTableHead>Libellé</UiTableHead>
        </UiTableRow>
      </UiTableHeader>
      <UiTableBody class="last:border-b">
        <template v-for="(invoice, index) in posts" :key="index">
          <UiTableRow>
            <UiTableCell class="font-medium">{{ invoice.id }} </UiTableCell>
            <UiTableCell>{{ invoice.title }}</UiTableCell>
          </UiTableRow>
        </template>
      </UiTableBody>
    </UiTable>
  </div>
</template>

<script setup>
  import { usePostsStore } from "~/stores/posts";

  const postStore = usePostsStore();

  onMounted(async () => {
    await postStore.getAllPosts();
  });

  const posts = computed(() => postStore.items);
</script>
