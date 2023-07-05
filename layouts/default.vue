<template>
  <div>
    <nav-bar />
    <div class="columns">
      <div class="column is-narrow is-hidden-touch">
        <section class="section sticky">
          <side-bar />
        </section>
      </div>
      <div class="column content">
        <nuxt />
      </div>
    </div>
    <section class="section is-hidden-desktop">
      <side-bar />
    </section>
  </div>
</template>

<script>
import NavBar from '~/components/layout/nav-bar'
import Aside from '~/components/layout/aside'

export default {
  components: {
    navBar: NavBar,
    sideBar: Aside
  }
}
</script>

<style>
.sticky	{
	position: sticky;
  top: 50px;
}
</style>



