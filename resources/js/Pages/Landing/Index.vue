<template>
  <div class="bg-white">
    <Header />

    <main>
      <Hero />
      <Pricing />
      <LogoCloud />
      <AlternatingFeature />
      <GradientFeature />
      <Statistics />
      <CTA />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Hero from './Hero.vue'
import Pricing from './Pricing.vue'
import LogoCloud from './LogoCloud.vue'
import GradientFeature from './GradientFeature.vue'
import AlternatingFeature from './AlternatingFeature.vue'
import Statistics from './Statistics.vue'
import CTA from './CTA.vue'
import Footer from './Footer.vue'
</script>