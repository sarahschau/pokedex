type Nullable<T> = T | null;

interface ApiUrl {
    name: string;
    url: string;
}

interface PokemonEvolution {
    name: Nullable<string>;
}

export interface PokemonAbility {
    ability: ApiUrl;
    is_hidden: boolean;
    slot: number;
    abilityDescription: string;
}

export interface PokemonListData {
    loading: boolean;
    pokemons: Array<ApiUrl>;
    offset: number;
    hideLoadButton: boolean;
}

export interface PokemonData {
    order: number;
    name: string;
    sprites: {
        front_default: Nullable<string>;
    };
    abilities: Array<PokemonAbility>;
    types: Array<{
        slot: number;
        type: ApiUrl;
    }>;
    stats: Array<{
        base_stat: number;
        effort: number;
        stat: ApiUrl;
    }>;
    moves: Array<{
        move: ApiUrl;
    }>;
}

export interface PokemonDetails {
    loading: boolean;
    pokemonData: Nullable<PokemonData>;
    pokemonEvolution: PokemonEvolution[];
    pokemonAbilities: PokemonAbility[];
}

export interface AbilityDetails {
    effect_entries: Array<{
        short_effect: string;
    }>;
}

export interface AbilityData {
    abilities: AbilityDetails[];
}

export interface EvolutionSpecies {
    species: ApiUrl;
    evolves_to?: EvolutionSpecies[];
}

export interface EvolutionData {
    chain: EvolutionSpecies;
}
