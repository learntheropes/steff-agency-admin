export default ({ $axios }, inject) => {
  const netlify = {
    build: async () => {
      const { data } = await $axios.post('/.netlify/functions/netlify-build')
      return data 
    }
  }
  inject('netlify', netlify)
}