<template>
  <section class="section">{{ works }}</section>
</template>

<script>
export default {
  async asyncData({ app }) {
    const works = await app.$db.works.filter({
      index: 'works_by_status',
      value: 'provided'
    })
    return { works }
  }
}
</script>