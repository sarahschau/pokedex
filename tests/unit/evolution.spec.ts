import { mount } from '@vue/test-utils';
import PokemonEvolution from '@/components/PokemonEvolution.vue';

describe('PokemonEvolution.vue', () => {
    it('checks html markup for pokemon evolution with no evolution data', () => {
        const wrapper = mount(PokemonEvolution, {
            propsData: { pokemonEvolution: [] }
        });
        expect(wrapper.html()).not.toContain('<h2>Evolution</h2>');
    });

    it('checks html markup for pokemon evolution with evolution data', () => {
        const wrapper = mount(PokemonEvolution, {
            propsData: { pokemonEvolution: [{ name: 'test' }] }
        });
        expect(wrapper.html()).toContain(
            '<p class="pokemon-evolution__name">test</p>'
        );
    });
});
