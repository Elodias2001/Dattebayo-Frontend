<template>
  <div class="flex">
    <UiDropdownMenu>
      <UiDropdownMenuTrigger asChild>
        <UiButton variant="outline" size="icon">
          <Icon name="lucide:languages" class="h-5 w-5" />
        </UiButton>
      </UiDropdownMenuTrigger>
      <UiDropdownMenuContent align="end">
        <UiDropdownMenuRadioGroup v-model="locale">
          <template v-for="l in locales" :key="l.code">
            <UiDropdownMenuRadioItem
              v-if="typeof l !== 'string'"
              @select="setLocale(l.code)"
              :value="l.code"
              :textValue="l.name"
              >{{ l.name }}</UiDropdownMenuRadioItem
            >
          </template>
        </UiDropdownMenuRadioGroup>
      </UiDropdownMenuContent>
    </UiDropdownMenu>
    <div class="mx-3">
      <UiButton variant="outline" size="icon" @click.prevent="auth.logout"
        ><Icon class="h-4 w-4" name="lucide:log-out"
      /></UiButton>
    </div>
  </div>
</template>

<script setup>
  import { useAuthStore } from "~/stores/auth";

  const { locale, locales, setLocale } = useI18n();

  const auth = useAuthStore();
</script>
