import { createLocalVue, shallowMount } from '@vue/test-utils';
import PokemonList from '@/components/PokemonList.vue';
import VueRouter from 'vue-router';
import Vue from 'vue';

describe('PokemonList.vue', () => {
    const localVue = createLocalVue();
    const router = new VueRouter();

    const wrapper = shallowMount(PokemonList, { localVue, router });

    it('Check visiblity of Load Button', async () => {
        wrapper.setData({ hideLoadButton: true });
        await Vue.nextTick();
        expect(wrapper.html()).not.toContain('Load more');

        wrapper.setData({ hideLoadButton: false });
        await Vue.nextTick();
        expect(wrapper.html()).toContain('Load more');
    });
});
