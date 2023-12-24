<script>
export default {
    name : 'SingleCard',
    props: {
        card : {
            type: Object,
            required: true,
        }
    }
}
</script>

<template lang="">
    <article class="mb-2">
        <div class="card-image">
            <img :src="card.card_images[0].image_url" alt="">
        </div>
        <section class="card-description text-center">
            <p class="text-white text-uppercase">{{card.name}}</p>
            <p class="fs-5">{{card.archetype}}</p>
        </section>
    </article>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    article {
        background-color: $card-bg-color;
        width: calc(100% / 5 - 1rem);
        img {
            width: 100%;
        }
    }
</style>