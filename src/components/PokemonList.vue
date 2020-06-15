<template>
    <table v-if="!loading" class="pokemon-list table table-striped">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(pokemon, idx) in pokemons" :key="idx">
                <th>{{ idx + 1 }}</th>
                <td>
                    <router-link :to="'/pokemon/' + pokemon.name">
                        <!-- eslint-disable-next-line -->
                        {{ pokemon.name }}
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import Vue from 'vue';
import axios, { AxiosResponse, AxiosError } from 'axios';
import router from '../router';

import { PokemonListData } from '../interfaces';

export default Vue.extend({
    name: 'PokemonList',
    data(): PokemonListData {
        return {
            loading: true,
            pokemons: null
        };
    },
    methods: {
        fetchData() {
            axios
                .get('https://pokeapi.co/api/v2/pokemon/?limit=964')
                .then((response: AxiosResponse): void => {
                    this.pokemons = response.data.results;
                    this.loading = false;
                })
                .catch((error: AxiosError | undefined): void => {
                    if (error && error.response) {
                        if (error.response.status === 404) {
                            router.replace('/404');
                        }
                    }
                    this.loading = false;
                });
        }
    },
    mounted() {
        this.loading = true;
    },
    created() {
        this.fetchData();
    }
});
</script>
