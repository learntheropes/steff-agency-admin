<template>
  <section class="section">
    <nav class="level">
      <div class="level-left">
        <div class="level-item">
          <p class="title">Active Staff</p>
        </div>
      </div>
    </nav>
    <b-table :data="staff">
      <template slot-scope="props">
        <b-table-column label="Given Name">
          {{ props.row.firstName }}
        </b-table-column>
        <b-table-column label="Last Name">
          {{ props.row.lastName }}
        </b-table-column>
        <b-table-column label="Email">
          <a :href="'mailto:' + props.row.email">
            {{ props.row.email }}
          </a>
        </b-table-column>
        <b-table-column label="Phone">
          <a :href="'https://wa.me/' + props.row.phone.replace('+', '')">
            {{ props.row.phone }}
          </a>
        </b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
export default {
  async asyncData({ app }) {
    const staff = await app.$db.staff.filter({
      index: 'approved_staff',
      value: true
    })
    return { staff }
  }
}
</script>
