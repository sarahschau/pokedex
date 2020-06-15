<template>
    <div class="pokemon-stats">
        <h2>Stats</h2>
        <hr />
        <div>
            <div v-for="(stat, idx) in stats" :key="idx">
                <p class="t-text">{{ stat.stat.name }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'PokemonStats',
    props: {
        stats: {
            type: Array
        }
    }
});
</script>
