<template>
<v-container>
    <h1>Admin</h1>
    <v-btn @click="scanner">
      <span>Scanner</span>
    </v-btn>
    <v-btn @click="borrowpage">ยืมอุปกรณ์</v-btn>
    <v-btn>คืนอุปกรณ์</v-btn>
    <v-btn>รายวิชา</v-btn>
    <v-btn>จัดซื้ออุปกรณ์</v-btn>
    <v-btn>ออกจากระบบ</v-btn>
  </v-container>



  
</template>


<script>
  export default {
    created () {
    },
    destroyed () {
    },
    methods: {
      scanner() {
        window.location = 'http://localhost:8080/scanner'
      },
      borrowpage(){
        window.location = 'http://localhost:8080/Borrow'
      }
    },
  }
</script>