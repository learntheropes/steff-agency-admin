<template>
  <section class="section">
    <p class="title">Quoted</p>
    <div class="content">
      <b-table :data="works" :opened-detailed="defaultOpenedDetails" detailed detail-key="id">
        <template slot-scope="props">
          <b-table-column
            v-for="(column, index) in columns"
            :key="'column'+index"
            :label="column.label"
          >{{ props.row[column.field] }}</b-table-column>
        </template>
        <template slot="detail" slot-scope="props">
          <b-table :data="props.row.offers" :columns="offerColumns">
            <template slot-scope="props">
              <b-table-column field="id" label="ID">{{ props.row.id }}</b-table-column>
              <b-table-column field="reservation" label="Booking %">{{ props.row.reservation }}</b-table-column>
              <b-table-column field="total" label="Total">{{ props.row.total }}</b-table-column>
              <b-table-column field="currency" label="Currency">{{ props.row.currency }}</b-table-column>
              <b-table-column field="actions" label="Actions">
                <button class="button" @click.prevent="markAsBooked(props.row)">Mark as booking paid</button>
              </b-table-column>
            </template>
          </b-table>
        </template>
      </b-table>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      defaultOpenedDetails: [],
      columns: [
        {
          field: 'company',
          label: 'Company'
        },
        {
          field: 'position',
          label: 'Position'
        },
        {
          field: 'name',
          label: 'Name'
        },
        {
          field: 'email',
          label: 'Email'
        },
        {
          field: 'phone',
          label: 'Phone'
        },
        {
          field: 'description',
          label: 'Description'
        }
      ]
    }
  },
  async asyncData({ app }) {
    const works = await app.$db.works.filter({
      index: 'works_by_status',
      value: 'quoted'
    })
    for (const work of works) {
      const offers = await app.$db.offers.filter({
        index: 'offers_by_work',
        value: work.id
      })
      work.offers = offers
    }
    return { works }
  },
  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row)
    },
    async markAsBooked(row) {
      await this.$db.works.update({
        ref: row.work,
        props: { status: 'booked' }
      })
    }
  }
}
</script>
