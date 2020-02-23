<template>
  <div>
    Works!
  </div>
</template>

<script>
export default {
  middleware (ctx) {
    ctx.$gtm.init('GTM-56H68LH')
    ctx.$gtm.push({ event: 'ssr' })
  }
}
</script>
