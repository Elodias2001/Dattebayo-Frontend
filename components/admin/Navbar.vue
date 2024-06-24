<template>
  <UiNavbar sticky>
    <UiContainer class="flex h-14 items-center justify-between">
      <p class="text-lg font-semibold"><NuxtLink to="/">DATTEBAYO</NuxtLink></p>
      <div class="flex items-center gap-2">
        <UiButton
          @click="$colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'"
          variant="ghost"
          size="icon-sm"
        >
          <Icon name="lucide:sun-medium" class="h-4 w-4" />
        </UiButton>
        <UiButton variant="outline" size="icon" @click.prevent="auth.logout"
          ><Icon class="h-4 w-4" name="lucide:log-out"
        /></UiButton>
      </div>
    </UiContainer>
  </UiNavbar>
</template>

<script setup>
  import { useAuthStore } from "~/stores/auth";

  const auth = useAuthStore();
</script>
