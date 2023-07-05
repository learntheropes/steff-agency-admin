<template>
  <section class="section container">
    {{work}}
  </section>
</template>

<script>
export default {
  async asyncData ({ app, params: { ref }}) {
    const work = await app.$db.works.get(ref)
    return { work }
  }
}
</script>