<script>
    import axios from 'axios';
    import SingleCard from './SingleCard.vue';
    import {store} from '../js/store.js';
    export default {
        components: {
            SingleCard
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
            console.log(response.data.data);
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
    <section id="cards-wrapper" class="p-4">
        <div class="bg-dark p-3">
            <h2 class="text-white fs-6 fw-bold mb-0">Found {{store.cardList.length}} cards</h2>
        </div>
        <div class="cards d-flex flex-wrap justify-content-between">
            <SingleCard v-for="card in store.cardList" :card="card"/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section#cards-wrapper {
        background-color: white;
    }
</style>