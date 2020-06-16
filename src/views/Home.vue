<template>
    <div class="container">
        <div class="row position-relative mt-5">
            <img class="col-2 align-self-end" src="@/assets/Pokemon.svg" alt />
            <h1 class="mt-5 mb-4 col-8 text-center">Pokedex</h1>
            <img class="col-2 align-self-end" src="@/assets/Pokemon.svg" alt />
        </div>

        <PokemonList class="mb-5" />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import PokemonList from '@/components/PokemonList.vue';

export default Vue.extend({
    name: 'Home',
    components: {
        PokemonList
    }
});
</script>
