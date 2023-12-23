<script >
    import {store} from './js/store.js';
    import axios from 'axios';
    import AppHeader from './components/AppHeader.vue';
    import AppSearch from './components/AppSearch.vue';
    import CardsList from './components/CardsList.vue';

    export default {
      components : {
        AppHeader,
        AppSearch,
        CardsList,
      },
      data () {
        return {
          cards : [],
          store
        }
      },
      methods : {
        getCards() {
          axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
          .then((response) => {
            // handle success
            console.log(response.data.data);
          })
          .catch(function (error) {
            // handle error
            console.error(error);
          })
        }
      },
      created () {
        this.getCards();
      },
    }
</script>

<template>
    <AppHeader/>
    <AppSearch/>
    <CardsList/>
</template>

<style lang="scss">
    @use './styles/general.scss';
</style>
