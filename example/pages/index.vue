<template>
  <div>
    Works!
  </div>
</template>

<script>
export default {
  middleware (ctx) {
    ctx.$gtm.push({ event: 'ssr' })
  }
}
</script>
