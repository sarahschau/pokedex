<template>
    <div class="pokemon-abilities">
        <h2>Abilities</h2>
        <hr />
        <div>
            <div v-for="(ability, idx) in abilities" :key="idx">
                <!-- eslint-disable-next-line -->
                {{ ability.ability.name }}
                <button
                    type="button"
                    class="btn btn-light my-2 ml-2 t-text"
                    data-toggle="tooltip"
                    data-placement="top"
                    :title="ability.abilityDescription"
                >
                    <svg viewBox="0 0 512 512" width="20" heigh="20">
                        <path
                            d="M437.02 74.98C388.667 26.629 324.38 0 256 0S123.333 26.629 74.98 74.98C26.629 123.333 0 187.62 0 256s26.629 132.667 74.98 181.02C123.333 485.371 187.62 512 256 512s132.667-26.629 181.02-74.98C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.98-181.02zM256 70c30.327 0 55 24.673 55 55s-24.673 55-55 55-55-24.673-55-55 24.673-55 55-55zm70 350H186v-30h30V240h-30v-30h110v180h30v30z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import $ from 'jquery';

export default Vue.extend({
    props: {
        abilities: {
            type: Array,
            required: true
        }
    },
    mounted() {
        ($('[data-toggle="tooltip"]') as any).tooltip();
    }
});
</script>
