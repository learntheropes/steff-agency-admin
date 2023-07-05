import Works from '~/components/user/works';
<template>
  <section class="section">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <p class="title">Staff Pending Approval</p>
        </div>
      </div>
      <div class="level-right">
        <p v-if="showPublish" class="level-item">
          <button @click="publish" class="button is-primary">Publish</button>
        </p>
      </div>
    </nav>
    <b-table
      :data="staffPendingApproval"
      :opened-detailed="defaultOpenedDetails"
      detailed
      detail-key="email"
    >
      <template slot-scope="props">
        <b-table-column
          v-for="(column, index) in columnsApproval"
          :key="'column' + index"
          :label="column.label"
        >{{ props.row[column.field] }}</b-table-column>
      </template>
      <template slot="detail" slot-scope="props">
        <application-card :ind="props.index" :obj="props.row" />
      </template>
    </b-table>
  </section>
</template>

<script>
import filter from 'lodash.filter'
import Application from '~/components/staff-pending'

export default {
  components: {
    applicationCard: Application
  },
  data() {
    return {
      defaultOpenedDetails: [],
      columnsApproval: [
        {
          field: 'firstName',
          label: 'Given Name'
        },
        {
          field: 'lastName',
          label: 'Last Name'
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
          field: 'publication',
          label: 'Publication agreement'
        }
      ]
    }
  },
  async asyncData({ app }) {
    const staff = await app.$db.staff.list()
    return { staff }
  },
  computed: {
    staffPendingApproval() {
      return filter(this.staff, { approved: false })
    },
    staffPendingPublication() {
      return filter(this.staff, { approved: true, published: false })
    },
    showPublish() {
      return this.staffPendingPublication.length > 0
    }
  },
  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row)
    },
    async publish() {
      for (const doc of this.staffPendingPublication) {
        doc.published = true
        await updateOneStaff(doc)
      }
      await this.$netlify.build()
    }
  }
}
</script>
