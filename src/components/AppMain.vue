<template>
    <main class="py-4">
        <div id="my_container-cardList" class="container p-4">
            <AppSearch/>
            <CardsList/>
        </div>
    </main>
</template>
<script>
import CardsList from './CardsList.vue';
import AppSearch from './AppSearch.vue';
export default {
    components: {
        CardsList,
        AppSearch
    }
}
</script>
<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    main {
        background-color: $main-bg-color;
        div#my_container-cardList {
            background-color: white;
        }
    }
</style>