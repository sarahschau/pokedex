<template>
    <div>
        <div v-if="!loading" class="pokemon container">
            <h1 class="text-uppercase text-center">
                {{ $route.params.id + ' #' + pokemonData.order }}
            </h1>

            <div class="row mt-5">
                <div class="col-12 col-md-3">
                    <img
                        class="img img-fluid"
                        :src="
                            'https://pokeres.bastionbot.org/images/pokemon/' +
                                pokemonData.id +
                                '.png'
                        "
                        alt
                    />

                    <div class="row mt-3">
                        <div class="col">
                            <p
                                v-for="(type, idx) in pokemonData.types"
                                :key="idx"
                                class="badge badge-info mr-3 t-text"
                            >
                                <!-- eslint-disable-next-line -->
                                {{ type.type.name }}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-md-4 offset-md-1 mt-5 mt-md-0">
                    <!-- eslint-disable-next-line -->
                    <pokemon-abilities
                        :abilities="pokemonAbilities"
                    ></pokemon-abilities>
                </div>

                <div class="col-12 col-md-4 mt-5 mt-md-0">
                    <pokemon-stats :stats="pokemonData.stats"></pokemon-stats>
                </div>
            </div>

            <div class="row mt-5">
                <div class="col-12">
                    <pokemon-moves :moves="pokemonData.moves"></pokemon-moves>
                </div>
            </div>

            <div class="row my-5">
                <!-- eslint-disable-next-line -->
                <pokemon-evolution
                    :pokemonEvolution="pokemonEvolution"
                ></pokemon-evolution>
            </div>
        </div>
        <app-loading v-if="loading"></app-loading>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios, { AxiosResponse, AxiosError } from 'axios';
import router from '../router';

import {
    PokemonDetails,
    PokemonData,
    EvolutionSpecies,
    EvolutionData,
    PokemonAbility,
    AbilityDetails
} from '@/interfaces';

import AppLoading from '@/components/AppLoading.vue';
import PokemonEvolution from '@/components/PokemonEvolution.vue';
import PokemonAbilities from '@/components/PokemonAbilities.vue';
import PokemonMoves from '@/components/PokemonMoves.vue';
import PokemonStats from '@/components/PokemonStats.vue';
export default Vue.extend({
    name: 'PokemonDetails',
    data(): PokemonDetails {
        return {
            loading: true,
            pokemonData: null,
            pokemonEvolution: [],
            pokemonAbilities: []
        };
    },
    components: {
        PokemonEvolution,
        PokemonAbilities,
        PokemonMoves,
        PokemonStats,
        AppLoading
    },
    mounted() {
        this.loading = true;
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData(): void {
            axios
                .get(
                    'https://pokeapi.co/api/v2/pokemon/' + this.$route.params.id
                )
                .then((response: AxiosResponse<PokemonData>): void => {
                    this.pokemonData = response.data;
                    this.fetchAbilities(this.pokemonData.abilities);
                })
                .catch((error: AxiosError): void => {
                    this.loading = false;
                    if (error && error.response) {
                        if (error.response.status === 404) {
                            router.replace('/404');
                        }
                    }
                });
        },
        fetchSpiecesInformation(): void {
            axios
                .get(
                    'https://pokeapi.co/api/v2/pokemon-species/' +
                        this.$route.params.id
                )
                .then((response: AxiosResponse): void => {
                    this.fetchEvolutionData(response.data.evolution_chain.url);
                })
                .catch((error: AxiosError): void => {
                    console.log(error);
                    this.loading = false;
                });
        },
        fetchEvolutionData(url: string): void {
            if (url) {
                axios
                    .get(url)
                    .then((response: AxiosResponse<EvolutionData>): void => {
                        const evolutionChain = (data: EvolutionSpecies) => {
                            this.pokemonEvolution.push({
                                name: data.species.name
                            });
                            if (data.evolves_to && !!data.evolves_to.length) {
                                evolutionChain(data.evolves_to[0]);
                            }
                        };

                        evolutionChain(response.data.chain);

                        this.loading = false;
                    })
                    // eslint-disable-next-line
                    .catch((error: AxiosError): void => {
                        this.loading = false;
                    });
            }
        },
        fetchAbilities(abilities: PokemonAbility[]): void {
            for (let i = 0; i < abilities.length; i++) {
                axios
                    .get(abilities[i].ability.url)
                    .then((response: AxiosResponse<AbilityDetails>): void => {
                        const obj = Object.assign(
                            {
                                abilityDescription:
                                    response.data.effect_entries[i].short_effect
                            },
                            abilities[i]
                        );
                        this.pokemonAbilities.push(obj);
                    })
                    .catch((error: AxiosError): void => {
                        console.log(error);
                        this.loading = false;
                    });
            }
            this.fetchSpiecesInformation();
        }
    }
});
</script>
