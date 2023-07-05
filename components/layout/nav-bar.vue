<template>
  <b-navbar fixed-top shadow>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <b-taglist attached>
          <b-tag size="is-medium" type="is-dark">Steff Agency</b-tag>
          <b-tag size="is-medium" type="is-grey">Admin</b-tag>
        </b-taglist>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <button v-if="!authenticated" @click="login" class="button is-dark is-outlined">Login</button>
        <button v-if="authenticated" @click="logout" class="button is-dark is-outlined">Logout</button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    authenticated() {
      return this.$store.state.auth.loggedIn
    }
  },
  methods: {
    login() {
      this.$auth.loginWith('google')
    },
    logout() {
      this.$auth.logout()
    }
  }
}
</script>
