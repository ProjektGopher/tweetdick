<template>
  <a
    :href="route('twitter.auth.redirect')"
    class="
      ml-8
      whitespace-nowrap
      inline-flex
      items-center
      justify-center
      bg-gradient-to-r
      from-purple-600
      to-indigo-600
      bg-origin-border
      px-4
      py-2
      border border-transparent
      rounded-md
      shadow-sm
      text-base
      font-medium
      text-white
      hover:from-purple-700 hover:to-indigo-700
    "
  >
    Sign in with twitter
    <component :is="icons.twitter.icon" class="h-6 w-6 ml-1 text-white" aria-hidden="true" />
  </a>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>