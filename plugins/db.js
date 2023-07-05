export default ({ $axios }, inject) => {
  const db = {
    works: {
      update: async ({ ref, props }) => {
        const { data } = await $axios.post('/.netlify/functions/fauna-generic-update', { 
          ref, props, collection: 'works'
        })
        return data  
      },
      get: async (ref) => {
        const { data } = await $axios.get('/.netlify/functions/fauna-generic-get', { 
          params: { ref, collection: 'works' }
        })
        return data
      },
      filter: async ({ index, value }) => {
        const { data } = await $axios.get('/.netlify/functions/fauna-generic-filter', { 
          params: {index, value}
        })
        return data 
      }
    },
    offers: {
      create: async ({ ref, props }) => {
        const { data } = await $axios.post('/.netlify/functions/fauna-generic-create', { 
          ref, props, collection: 'offers'
        })
        return data
      },
      get: async (ref) => {
        const { data } = await $axios.get('/.netlify/functions/fauna-generic-get', { 
          params: { ref, collection: 'offers' }
        })
        return data
      },
      filter: async ({ index, value }) => {
        const { data } = await $axios.get('/.netlify/functions/fauna-generic-filter', { 
          params: {index, value}
        })
        return data 
      }
    }, 
    staff: {
      list: async () => {
        const { data } = await $axios.get('/.netlify/functions/fauna-generic-list', {
          params: { index: 'all_staff'}
        })
        return data
      },
      filter: async ({ index, value }) => {
        const { data } = await $axios.get('/.netlify/functions/fauna-generic-filter', { 
          params: {index, value}
        })
        return data 
      },
      update: async ({ ref, props }) => {
        const { data } = await $axios.post('/.netlify/functions/fauna-generic-update', { 
          ref, props, collection: 'staff'
        })
        return data
      },
      delete: async (ref) => {
        const { data } = await $axios.post('/.netlify/functions/fauna-generic-delete', { 
          ref, collection: 'staff'
        })
        return data
      }
    },
    payments: {
      list: async () => {
        const { data } = await $axios.get('/.netlify/functions/fauna-generic-list', {
          params: { index: 'all_payments'}
        })
        return data
      },
      filter: async ({ index, value }) => {
        const { data } = await $axios.get('/.netlify/functions/fauna-generic-filter', { 
          params: {index, value}
        })
        return data 
      }
    }
  }
  inject('db', db)
}
