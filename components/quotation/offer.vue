<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">Offer</p>
    </header>
    <div class="card-content">
      <div class="content">
        <div class="columns">
          <div class="column is-one-third">
            <b-field label="Booking confirmation %">
              <b-slider
                v-model="reservation"
                :min="0"
                :max="100"
                :step="10"
                ticks
              ></b-slider>
            </b-field>
          </div>
          <div class="column is-one-third">
            <div class="column is-narrow">
              <div class="field">
                <label class="label">Currency</label>
                <p class="control">
                  <span class="select">
                    <select v-model="currency">
                      <option>USD</option>
                      <option>EUR</option>
                      <option>ARS</option>
                      <option>PYG</option>
                    </select>
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div class="column is-one-third">
            <label class="label">Staff</label>
            <div class="block">
              <b-checkbox
                v-for="(h, i) of localStaffApproved"
                :key="i"
                v-model="staff"
                :native-value="h.slug"
                >{{ h.slug }}</b-checkbox
              >
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <div class="field">
              <label class="label">Description</label>
              <p class="control">
                <input
                  v-model="description"
                  class="input"
                  placeholder="Description"
                  type="text"
                />
              </p>
            </div>
          </div>
          <div class="column is-1">
            <div class="field">
              <label class="label">Units</label>
              <p class="control">
                <input v-model="amount" class="input" type="number" />
              </p>
            </div>
          </div>
          <div class="column is-narrow">
            <div class="field">
              <label class="label">Unit price</label>
              <p class="control">
                <input v-model="unitPrice" class="input" type="number" />
              </p>
            </div>
          </div>
          <div class="column is-narrow">
            <div class="field">
              <label class="label">Action</label>
              <p class="control">
                <a @click="addItem()" class="button is-light">Add</a>
              </p>
            </div>
          </div>
        </div>

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
              <th v-if="items[0]" class="has-text-right">
                {{ total }} {{ items[0].currency }}
              </th>
              <th v-else class="has-text-right">{{ total }}</th>
            </tr>
          </tfoot>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td>{{ item.description }}</td>
              <td class="has-text-right">{{ item.amount }}</td>
              <td class="has-text-right">
                {{ item.unitPrice }} {{ item.currency }}
              </td>
              <td class="has-text-right">
                {{ item.amount * item.unitPrice }} {{ item.currency }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">
        <div class="buttons">
          <a class="button is-text">Reset</a>
          <a @click="createOffer()" :class="isLoading" :disabled="isDisabled"
            >Save</a
          >
          <a
            :href="'https://res.cloudinary.com/abasto/image/upload/' + offerId"
            target="_blank"
            class="button"
            :disabled="DownloadButtonDisabled"
            >See PDF offer</a
          >
          <a
            @click="emailOffer()"
            class="button"
            :disabled="DownloadButtonDisabled"
            >Email Offer</a
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['quotation', 'localStaffApproved'],
  data() {
    return {
      isDisabled: false,
      isLoading: 'button',
      DownloadButtonDisabled: true,
      defaultOpenedDetails: [],
      offerId: null,
      reservation: 50,
      staff: [],
      items: [],
      currency: 'ARS',
      description: null,
      amount: null,
      unitPrice: null
    }
  },
  computed: {
    total() {
      return this.items.reduce(function(tot, item) {
        tot = tot + item.amount * item.unitPrice
        return tot
      }, 0)
    }
  },
  methods: {
    addItem(value) {
      this.items.push({
        description: this.description,
        amount: this.amount,
        unitPrice: this.unitPrice
      })
      this.description = null
      this.amount = null
      this.unitPrice = null
    },
    async createOffer() {
      this.isLoading = this.isLoading + ' is-loading'
      this.isDisabled = true
      const offer = await this.$db.offers.create({
        props: {
          work: this.quotation.id,
          items: this.items,
          reservation: this.reservation,
          staff: this.staff,
          currency: this.currency,
          total: this.total
        }
      })
      this.offerId = offer.ref['@ref'].id
      const token = this.$cookies.get('auth._token.google').split(' ')[1]

      await this.$axios.get('/.netlify/functions/puppeteer', {
        params: { token, id: this.offerId }
      })

      await this.$db.works.update({
        ref: this.quotation.id,
        props: { status: 'quoted' }
      })
      this.isDisabled = false
      this.isLoading = 'button'
      this.DownloadButtonDisabled = false
      await this.$netlify.build()
    },
    async emailOffer() {
      await this.$axios.post('/.netlify/functions/mailgun-send', {
        email: this.quotation.email,
        offerId: this.offerId
      })
    }
  }
}
</script>
