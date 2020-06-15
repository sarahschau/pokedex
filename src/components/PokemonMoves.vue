<template>
    <div class="pokemon-moves">
        <h2>Moves</h2>
        <hr />
        <!-- eslint-disable-next-line -->
        <div class="badge badge-light inline m-2 t-text" v-for="(move, idx) in moves" :key="idx">
            <!-- eslint-disable-next-line -->
            {{ move.move.name }}
        </div>
        <hr />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'PokemonMoves',
    props: {
        moves: {
            type: Array
        }
    }
});
</script>
