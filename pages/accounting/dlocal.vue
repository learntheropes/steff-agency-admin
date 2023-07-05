<template>
  <section class="section">
    <p class="title">Payments</p>
    <b-table :data="payments">
      <template slot-scope="props">
        <b-table-column label="Offer">
          <nuxt-link :to="'/offers/'+props.row.order_id.split('_')[0]">
            {{ props.row.order_id.split('_')[0] }}
          </nuxt-link>
        </b-table-column>
        <b-table-column label="Type">
          {{ props.row.order_id.split('_')[1] }}
        </b-table-column>
        <b-table-column label="Amount" numeric>
          {{ numberWithDots(props.row.amount) }} {{ props.row.currency }}
        </b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          field: 'id',
          label: 'Work'
        },
        {
          field: 'amount',
          label: 'Amount'          
        }
      ]
    }
  },
  async asyncData ({ app }) {
    const payments = await app.$db.payments.filter({
      index: 'payments_by_status',
      value: 'PAID'
    })
    return { payments }
  },
  methods: {
    numberWithDots: (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
}
</script>
