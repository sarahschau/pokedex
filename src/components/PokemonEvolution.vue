<template>
    <div
        class="pokemon-evolution col-12 col-md-12"
        v-if="pokemonEvolution.length > 0"
    >
        <h2>Evolution</h2>
        <hr />
        <div class="row">
            <!-- eslint-disable-next-line -->
            <div
                class="col justify-content-center text-center"
                v-for="(evolution, idx) in pokemonEvolution"
                :key="idx"
            >
                <div>
                    <p class="pokemon-evolution__name">{{ evolution.name }}</p>
                </div>

                <svg
                    class="pokemon-evolution__arrow"
                    v-if="idx < pokemonEvolution.length - 1"
                    viewBox="0 0 492.004 492.004"
                    width="10"
                >
                    <path
                        d="M484.14 226.886L306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"
                    />
                </svg>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    props: {
        pokemonEvolution: {
            type: Array
        }
    },
    methods: {}
});
</script>

<style lang="scss">
.pokemon-evolution {
    &__arrow {
        position: absolute;
        left: 100%;
        transform: translateY(-50%) translateX(-100%);
        top: 50%;
    }

    &__name {
        margin-bottom: 0;
    }
}
</style>
