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
                store,
            }
        },
      created () {
        this.store.getCards(this.store.archetypeFilter);
      },
    }
</script>

<template>
    <section id="cards-wrapper" class="p-4">
        <div class="bg-dark p-3">
            <h2 class="text-white fs-6 fw-bold mb-0">Found {{store.cardList.length}} cards</h2>
        </div>
        <div class="cards d-flex flex-wrap justify-content-between">
            <SingleCard v-for="card in store.cardList"  :key="card.id"  :card="card"/>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    section#cards-wrapper {
        background-color: white;
    }
</style>