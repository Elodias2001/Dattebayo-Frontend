<template>
  <div>
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
          <UiButton variant="outline" size="sm"
            ><NuxtLink :to="localePath('/auth/login')">Connexion</NuxtLink></UiButton
          >
        </div>
      </UiContainer>
    </UiNavbar>
    <slot />
  </div>
</template>

<script setup>
  const localePath = useLocalePath();
</script>
