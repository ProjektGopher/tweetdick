<template>
  <a :href="route('twitter.auth.redirect')">Login with Twitter</a>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  },
})
</script>