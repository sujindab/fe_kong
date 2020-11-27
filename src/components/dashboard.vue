<template>
  <v-container>
   
    <div class="my-2">
        <v-btn depressed small color="green"  @click="logingoogle">Come on</v-btn>
      </div>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      aa : []
    }),
    async created() {
      // let data = await this.axios.post( 'http://localhost:3000/users/create', {  username : 'kong',
      // email : 'kong@asdasd.con',
      // password : '1234343',
      // name : 'asdasdasd',
      // lastname : 'asdasdasd',
      // phonenumber : '0931036192'})
      // console.log(data.data)
      console.log('GGG')
      
    },
    methods: {
      async logingoogle() {
        // let data = await this.axios.get( 'http://localhost:3000/login/google')
        window.location.href = 'http://localhost:3000/login/google'
        // window.location.href = 'http://192.168.100.3:8080/abc'
        // alert(data.data)
      }
    },
  }
</script>
