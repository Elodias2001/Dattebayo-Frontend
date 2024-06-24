<template>
  <AvatarImage v-bind="forwarded" :class="styles({ class: props.class })" />
</template>

<script setup>
  import { AvatarImage, useForwardPropsEmits } from "radix-vue";

  const props = defineProps();
  const emits = defineEmits();

  const forwarded = useForwardPropsEmits(reactiveOmit(props, "class"), emits);

  const styles = tv({
    base: "aspect-square h-full w-full object-cover",
  });
</script>
