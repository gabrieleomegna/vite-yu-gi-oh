<template>
    <div class="container">
        <select class="form-select mb-3" aria-label="Default select example" @change="selectFilter(archetypeSelected)" v-model="archetypeSelected">
            <option value="" selected>Select archetype</option>
            <option v-for="(archetype, index) in archetypesList" :key="index" :value="archetype.archetype_name" >{{ archetype.archetype_name }}</option>
        </select>
    </div>
</template>
<script>
import axios from 'axios';
import { store } from '../js/store';
export default {
    data() {
        return {
            archetypesList : [],
            apiUrl: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
            archetypeSelected: [],
            store

        }
    },
    methods : {
        getArchetypes() {
          axios.get(this.apiUrl)
          .then((response) => {
            // handle success
            this.archetypesList = response.data;
          })
          .catch(function (error) {
            // handle error
            console.error(error);
          })
        },
        selectFilter(archetype) {
          this.store.getCards(archetype);
        }
      },
      created () {
        this.getArchetypes();
      },
}
</script>
<style lang="scss" scoped>
    
</style>