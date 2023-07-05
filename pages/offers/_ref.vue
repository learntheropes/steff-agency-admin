<template>
  <section class="section">

    <div class="tile is-ancestor">
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <p class="title is-4">Work</p>
          <p class="subtitle is-6">
            <nuxt-link :to="'/works/'+offer.work">
              {{offer.work}}
            </nuxt-link>
          </p>
          <div class="content">{{work.description}}</div>
          Client: {{work.company}}<br>
          Name: {{work.name}}<br>
          Phone: {{work.phone}}<br>
          Email: {{work.email}}<br>
        </article>
      </div>
      <div class="tile is-parent is-8">
        <article class="tile is-child box">
          <p class="title is-4">Offer</p>
          <p class="subtitle is-6">
            {{ref}}
          </p>
          <items-table :items="offer.items" />
        </article>
      </div>
    </div>

    <div class="box">
      <h1 class="title is-4">Payments</h1>
      <b-table :data="payments">
        <template slot-scope="props">
          <b-table-column label="Type">
            {{ props.row.order_id.split('_')[1] }}
          </b-table-column>
          <b-table-column label="Amonut" numeric>
              {{ numberWithDots(props.row.amount) }} {{ props.row.currency }}
          </b-table-column>
        </template>
      </b-table>
    </div>
  </section>
</template>

<script>
import ItemsTable from '~/components/quotation/items-table'
export default {
  components: {
    itemsTable: ItemsTable
  },
  async asyncData ({ app, params: { ref }}) {
    const offer = await app.$db.offers.get(ref)
    const work = await app.$db.works.get(offer.work)
    const allPayments = await app.$db.payments.list()
    const payments = allPayments.filter(payment => {
      return payment.status === 'PAID' && payment.order_id.split('_')[0] === ref
    })
    return { ref, offer, work, payments }
  },
  methods: {
    numberWithDots: (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
}
</script>