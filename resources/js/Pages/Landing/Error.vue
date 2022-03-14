<template>
  <h3>Support</h3>
  <ul>
    <li v-for="item in footerNavigation.support" :key="item.name">
      <a :href="item.href">{{ item.name }}</a>
    </li>
  </ul>
  <h3>Legal</h3>
  <ul>
    <li v-for="item in footerNavigation.legal" :key="item.name">
      <a :href="item.href">{{ item.name }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
type FooterNav = { [key: string]: FooterNavItem[] }
type FooterNavItem = { name: String, href: String }
const footerNavigation: FooterNav = {
  support: [
    { name: 'Pricing', href: '#' },
    { name: 'Documentation', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

export default {
  setup() {
    return {
      footerNavigation,
    }
  },
}
</script>