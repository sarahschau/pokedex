import { createLocalVue, shallowMount } from '@vue/test-utils';
import PokemonDetails from '@/components/PokemonDetails.vue';
import VueRouter from 'vue-router';

describe('PokemonDetails.vue', () => {
    const localVue = createLocalVue();
    const router = new VueRouter();

    const wrapper = shallowMount(PokemonDetails, { localVue, router });

    it('check title format', () => {
        expect(
            (wrapper.vm as any).formatTitle({ name: 'test', order: '2' })
        ).toBe('TEST #2');
    });
});
