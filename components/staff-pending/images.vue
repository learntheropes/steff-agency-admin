<template>
  <div class="columns is-multiline is-mobile">
    <div
      v-for="(id, i) in model.media"
      :key="'file'+i"
      class="column is-narrow"
    >
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img :src="'https://res.cloudinary.com/abasto/h_256/'+id">
          </figure>
        </div>
        <footer class="card-footer">
          <a @click="setAsCover(id)" class="card-footer-item">Cover</a>
          <a @click="removeMedia(i)" class="card-footer-item">Remove</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'model'
  ],
  methods: {
    setAsCover(id) {
      this.model.cover = id
    },
    removeMedia(i) {
      this.model.media.splice(i,1)
    }
  }
}
</script>