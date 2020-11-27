<template>
    <nav>
    
        <v-toolbar color="blue">
            <v-app-bar-nav-icon class="grey--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-col>
              <v-toolbar-title class="text-uppercase grey--text">
            
                <span class="font-weight-black">Inventory</span>
                <span> Management System</span>
            </v-toolbar-title>
            </v-col>
            
            

            <v-tabs right >
              <v-tab>รายวิชา</v-tab>
              <v-tab>ขอยืม</v-tab>
              <v-tab>dashbroads</v-tab>
              <v-tab>รายวิชา</v-tab>
              <v-tab>ขอยืม</v-tab>
              <v-tab>dashbroads</v-tab>
              <v-btn
                text
                class="align-self-center mr-4"
                v-bind="attrs"
                v-on="on"
              >
                more
                <v-icon right>
                  mdi-menu-down
                </v-icon>
              </v-btn>
            <v-list class="grey lighten-3">
              <v-list-item
                v-for="item in more"
                :key="item"
                @click="addItem(item)"
              >
                {{ item }}
              </v-list-item>
            </v-list>

            </v-tabs>
        </v-toolbar>
        <v-navigation-drawer app light :stateless="dialog" temporary v-model="drawer">
        <v-dialog v-if="drawer" v-model="dialog" lazy absolute>
      </v-dialog>
    </v-navigation-drawer>

        
        
        
    </nav>

</template>

<script>
export default {
    data() {
        return{
            drawer: false,
            dialog: false
        }

    },
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