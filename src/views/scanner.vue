<template>
  <div >
    <StreamBarcodeReader
        @decode="onDecode"
        @loaded="onLoaded"
    ></StreamBarcodeReader>
  </div>
</template>
<script>
 import datastore from '../data/borrow.js'
import { StreamBarcodeReader } from "vue-barcode-reader";
export default {
  name: 'VueBarcodeTest',
  components:{
        StreamBarcodeReader
    },
  data () {
    return {
      readerSize: {
        width: 640,
        height: 480,
        scanid: false,
        scanitem: false 
      },
      detecteds: []
    }
  },
  methods: {
    onDecode (result) {
      if(this.scanid){
        datastore.idcard = result
        console.log(datastore)
        // console.log(result)
        this.$router.push({ name: 'Borrow' })
      }else if(this.scanitem){
        datastore.item.id = result
        console.log(datastore)
        this.$router.push({ name: 'Borrow' })
        // window.location.href = '/Borrow'
      }
    },
    onLoaded (){
    }
    
  },
  async created() {
    if(this.$route.query.id == 'true'){
      this.scanid = true
    }else if(this.$route.query.item == 'true'){
      this.scanitem = true
    }
    console.log( 'Parameter :', this.$route.query.id)
  },
}
</script>