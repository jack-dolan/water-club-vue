<template>
<section class="hero is-fullheight-with-navbar is-primary is-bold">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Payment Status
      </h1>
      <h2 class="subtitle">
        Last updated 1/6/2020
      </h2>
      <payment-table />
    </div>
  </div>
</section>
</template>

<script>
import PaymentTable from '@/components/PaymentTable.vue'

export default {
    name: 'main-hero',
    components: {
    PaymentTable,
  },
}
</script>

<style>
</style>