<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <scanner msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

// @ is an alias to /src
import scanner from '@/components/scanner.vue'

export default {
  name: 'Home',
  components: {
    scanner
  }
}
</script>
