<script >
    import axios from 'axios';
    import {store} from './js/store.js';
    import AppHeader from './components/AppHeader.vue';
    import AppMain from './components/AppMain.vue';

    export default {
      components : {
        AppHeader,
        AppMain
      },
      data() {
            return{
                store
            }
        },
      methods : {
        getCards() {
          axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=40&offset=0')
          .then((response) => {
            // handle success
            this.store.cardList = response.data.data;
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
    <AppMain/>
</template>

<style lang="scss">
    @use './styles/general.scss';
</style>
