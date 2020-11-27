<template>
    <v-row>
        <v-container>
            <v-data-table
                width="800"
                height="200"
                :headers="headers"
                :items="desserts"
                :items-per-page="5"
                item-key="name"
                class="elevation-1 mt-6"
            
            >
                <template v-slot:top>
                    <v-container>
                        <v-text-field
                        v-model="search"
                        label="Search"
                        class="mx-4"
                        filled
                        rounded
                        ></v-text-field>
                    </v-container>
                    
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                    <v-icon small class="mr-2" @click="editTutorial(item.id)">mdi-pencil</v-icon>
                    <v-icon small @click="deleteTutorial(item.id)">mdi-delete</v-icon>
                </template>
            </v-data-table>

      
        </v-container>
    </v-row>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Name',
            align: 'start',
            value: 'name',
          },
          { text: 'Quantity', value: 'category' },
          { text: "Actions", value: "actions", sortable: false },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            category: 'Ice cream',
          },
          {
            name: 'Ice cream sandwich',
            category: 'Ice cream',
          },
          {
            name: 'Eclair',
            category: 'Cookie',
          },
          {
            name: 'Cupcake',
            category: 'Pastry',
          },
          {
            name: 'Gingerbread',
            category: 'Cookie',
          },
          {
            name: 'Jelly bean',
            category: 'Candy',
          },
          {
            name: 'Lollipop',
            category: 'Candy',
          },
          {
            name: 'Honeycomb',
            category: 'Toffee',
          },
          {
            name: 'Donut',
            category: 'Pastry',
          },
          {
            name: 'KitKat',
            category: 'Candy',
          },
        ],
      }
    },
  }
</script>