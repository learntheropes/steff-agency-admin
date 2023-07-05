<template>
  <section class="section is-tall">
    <header>
      <div class="columns">
        <div class="column is-narrow is-offset-8">
          <p>logo</p>
        </div>
      </div>
    </header>
    <br />
    <br />
    <div class="content has-text-right">Ciudad de Buenos Aires, {{today}}.</div>
    <br />
    <br />
    <main class="is-tall-container">
      <div class="columns">
        <div class="column is-narrow has-text-weight-semibold">
          <p class="is-capitalized">{{inquiry.company}}</p>
          <p class="is-capitalized">{{inquiry.name}}</p>
          <p>{{inquiry.phone}}</p>
          <p class="is-lowercase">{{inquiry.email}}</p>
        </div>
      </div>
      <br />
      <br />
      <div id="content" class="content">
        <table class="table">
          <thead>
            <tr>
              <th>Descripción</th>
              <th class="has-text-right">Unidades</th>
              <th class="has-text-right">Precio unitario</th>
              <th class="has-text-right">Totál</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th v-if="offer.items[0]" class="has-text-right">{{total}} {{offer.currency}}</th>
              <th v-else class="has-text-right">{{total}}</th>
            </tr>
          </tfoot>
          <tbody>
            <tr v-for="(item,index) in offer.items" :key="index">
              <td>{{item.description}}</td>
              <td class="has-text-right">{{item.amount}}</td>
              <td class="has-text-right">{{item.unitPrice}} {{offer.currency}}</td>
              <td class="has-text-right">{{item.amount * item.unitPrice}} {{offer.currency}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <div calss="content">
        <p class="has-text-weight-semibold">Consideraciones</p>
        <p>Los valores no incluyen traslado.</p>
        <p>Los valores no incluyen IVA.</p>
        <p>La promotora cuenta con alta temprana ante AFIP, ART y seguro de cobertura obligatoria para acción promocional y eventos.</p>
        <p>Validez del presupuesto 15 días.</p>
      </div>
    </main>
    <br />
    <br />
    <br />
    <br />
    <br />
    <footer class="footer">Foo bar</footer>
  </section>
</template>

<script>
import ItemsTable from '~/components/quotation/items-table'
export default {
  layout: 'clean',
  auth: false,
  components: {
    itemsTable: ItemsTable
  },
  async asyncData({ app, query: { ref } }) {
    const offer = await app.$db.offers.get(ref)
    const inquiry = await app.$db.works.get(offer.work)
    return { offer, inquiry }
  },
  computed: {
    today() {
      return this.$moment().format('DD/MM/YYYY')
    },
    total() {
      return this.offer.items.reduce(function(tot, item) {
        tot = tot + item.amount * item.unitPrice
        return tot
      }, 0)
    }
  }
}
</script>

<style>
.is-tall {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.is-tall-container {
  flex: 1;
}
.footer {
  max-height: 1vh;
}
</style>