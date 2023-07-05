<template>
  <div v-if="authenticated" class="menu">
    <p  class="menu-label"><b>Staff</b></p>
    <ul class="menu-list">
      <li>
        <nuxt-link to="/staff/pending">Pending</nuxt-link>
        <nuxt-link to="/staff/active">Active</nuxt-link>
      </li>
    </ul>
    <p  class="menu-label"><b>Works</b></p>
    <ul class="menu-list">
      <li>
        <nuxt-link to="/works/inquiried">Inquiried</nuxt-link>
        <nuxt-link to="/works/quoted">Quoted</nuxt-link>
        <nuxt-link to="/works/booked">Booked</nuxt-link>
        <nuxt-link to="/works/provided">Provided</nuxt-link>
        <nuxt-link to="/works/paid">Paid</nuxt-link>
      </li>
    </ul>
    <p  class="menu-label"><b>Accounting</b></p>
    <ul class="menu-list">
      <li>
        <nuxt-link to="/accounting/dlocal">Dlocal Payments</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    authenticated() {
      return this.$store.state.auth.loggedIn
    }
  },
}
</script>
