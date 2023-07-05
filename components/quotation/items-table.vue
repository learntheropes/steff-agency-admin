<template>
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
        <th v-if="items[0]" class="has-text-right">{{numberWithDots(total)}} {{items[0].currency}}</th>
        <th v-else class="has-text-right">{{numberWithDots(total)}}</th>
      </tr>
    </tfoot>
    <tbody>
      <tr v-for="(item,index) in items" :key="index">
        <td>{{item.description}}</td>
        <td class="has-text-right">{{item.amount}}</td>
        <td class="has-text-right">{{numberWithDots(item.unitPrice)}} {{item.currency}}</td>
        <td class="has-text-right">{{numberWithDots(item.amount * item.unitPrice)}} {{item.currency}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: [
    'items'
  ],
  computed: {
    total () {
      return this.items.reduce(function(tot, item) {
        tot = tot + (item.amount * item.unitPrice)
        return tot
      }, 0)
    }
  },
  methods: {
    numberWithDots (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
}
</script>