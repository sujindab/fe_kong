<template>
  <div>
    <v-data-table
    :headers="headers"
    :items="users"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
  </div>
</template>
<script>

export default {
  name: 'VueBarcodeTest',
  data () {
    return {
      headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'name', value: 'username' },
          { text: 'email', value: 'email' }
        ],
        users:[]
    }
  },
  methods: {
    logIt (data) {
      console.log('detected', data)
    }

  },
  async created() {
      console.log('a')
      let result = await this.axios.get('http://localhost:3000/getuser/ted') 
      this.users.push(result.data)
        //   this.name = result.data.username
        //   this.email = result.data.email
      console.log(result)
  },
}
</script>