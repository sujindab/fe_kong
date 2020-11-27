<template>
  <v-container>
    <v-row> 
      <v-container>
        <h1>ยืมอุปกรณ์</h1>
      </v-container>
      
    </v-row>
    <v-row>
      <v-container>
          <v-btn @click="scannerID" class="mx-4">
            <span>Scan บัตรนิสิต</span>
          </v-btn>
          <v-btn @click="scannerItem" >Scan อุปกรณ์</v-btn>
      </v-container>
      
    </v-row>
    <v-row>
      <v-card width="400" class="mx-auto my-6">
        <v-container>
                <v-textarea
            v-model="idcard"
              no-resize
              rows="1"
              label="รหัสนิสิต"
              :value="idcard"
            ></v-textarea>
        <v-textarea
            v-model="iditem"
              no-resize
              rows="1"
              label="ID อุปกรณ์"
              :value="iditem"
            ></v-textarea>
          <v-textarea
            v-model="borrowDate"
              no-resize
              rows="1"
              label="วันที่ยืม"
              :value="borrowDate"
            ></v-textarea>
        <v-btn>ยืนยันข้อมูล</v-btn>
        </v-container>
      </v-card>  
    </v-row>
    
    
    
  </v-container>
</template>


<script>
  import data from '../data/borrow.js'
  export default {
    data() {
        return {
            idcard: 'nothave',
            iditem: '',
            borrowDate: Date.now(),
            more: [
        'News', 'Maps', 'Books', 'Flights', 'Apps',]
        }
    },
    created () {
      console.log(data)
        this.idcard = data.idcard
        this.iditem = data.item.id
        // this.iditem = borrow.item.id
    },
    destroyed () {
    },
    methods: {
      scannerID() {
        this.$router.push('/scanner?id=true')
        // window.location = 'http://localhost:8080/scanner?id=true'
      },
      scannerItem() {
        this.$router.push('/scanner?item=true')
        // window.location = 'http://localhost:8080/scanner?item=true'
      }
    },
  }
</script>