<template>
  <section class="section">{{ works }}</section>
</template>

<script>
export default {
  async asyncData({ app }) {
    const works = await app.$db.works.filter({
      index: 'works_by_status',
      value: 'booked'
    })
    for (const work of works) {
      const offers = await app.$db.offers.filter({
        index: 'offers_by_work',
        value: work.id
      })
      work.offers = offers
    }
    return { works }
  }
}
</script>