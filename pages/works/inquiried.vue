<template>
  <section class="section">
    <p class="title">Inquiries</p>
    <div class="content">
      <b-table
        :data="works"
        :opened-detailed="defaultOpenedDetails"
        detailed
        detail-key="created_at"
      >
        <template slot-scope="props">
          <b-table-column
            v-for="(column, index) in columns"
            :key="'column'+index"
            :label="column.label"
          >{{ props.row[column.field] }}</b-table-column>
        </template>
        <template slot="detail" slot-scope="props">
          <div class="block">
            <p v-if="props.row.description">Message: {{props.row.description}}</p>
            <p v-if="props.row.hostessAmount">Hostesses: {{props.row.hostessAmount}}</p>
            <p v-if="props.row.stewardAmount">Stewards: {{props.row.stewardAmount}}</p>
            <p v-if="props.row.bookmarks.length>0">Favorites: {{props.row.bookmarks.join(', ')}}</p>
            <p v-if="props.row.skills.length>0">Skills: {{props.row.skills.join(', ')}}</p>
            <p v-if="props.row.uniform">Uniform: {{props.row.uniform}}</p>
            <p v-if="props.row.dates[0]">Date From: {{getFormattedDate(props.row.dates[0])}}</p>
            <p v-if="props.row.dates[1]">Date To: {{getFormattedDate(props.row.dates[1])}}</p>
            <p v-if="props.row.fromTime">Time From: {{props.row.fromTime}}</p>
            <p v-if="props.row.toTime">Time To: {{props.row.toTime}}</p>
            <p>Total Hours: {{getTotalHours(props.row)}}</p>
            <p
              v-if="props.row.budget.amount"
            >Budget: {{props.row.budget.amount}} {{props.row.budget.currency}}</p>
          </div>
          <offer-box :quotation="props.row" :localStaffApproved="staff" />
        </template>
      </b-table>
    </div>
  </section>
</template>

<script>
import Offer from '~/components/quotation/offer'

export default {
  components: {
    offerBox: Offer
  },
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
          field: 'firstName',
          label: 'First name'
        },
        {
          field: 'lastName',
          label: 'Last name'
        },
        {
          field: 'email',
          label: 'Email'
        },
        {
          field: 'phone',
          label: 'Phone'
        }
      ]
    }
  },
  async asyncData({ app }) {
    const works = await app.$db.works.filter({
      index: 'works_by_status',
      value: 'inquiried'
    })
    const staff = await app.$db.staff.filter({
      index: 'approved_staff',
      value: 'true'
    })
    return { works, staff }
  },
  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row)
    },
    getFormattedDate(date) {
      if (date) return date.split('T')[0]
      else return ' '
    },
    getTotalHours(obj) {
      if (
        obj.toTime &&
        obj.fromTime &&
        obj.dates[1] &&
        obj.dates[0] &&
        obj.hostessAmount &&
        obj.stewardAmount
      ) {
        const toDate = new Date(`2013-04-08T${obj.toTime}:00Z`)
        const fromDate = new Date(`2013-04-08T${obj.fromTime}:00Z`)
        const dayHours = Math.abs(toDate - fromDate) / (60 * 60 * 1000)
        const days = (obj.dates[1] - obj.dates[0]) / (60 * 60 * 1000 * 24)
        const totalHours = dayHours * days
        return totalHours * (obj.hostessAmount + obj.stewardAmount)
      } else return 0
    }
  }
}
</script>
