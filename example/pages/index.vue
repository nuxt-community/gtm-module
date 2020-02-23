<template>
  <div>
    Works!
  </div>
</template>

<script>
export default {
  middleware (ctx) {
    ctx.$gtm.init('GTM-SSR')
    ctx.$gtm.push({ event: 'ssr' })
  }
}
</script>
