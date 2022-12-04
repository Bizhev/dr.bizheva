import Vue from 'vue';
import Vuex from 'vuex';
/**
 * Документация по нему:
 * @link https://github.com/ktsn/vuex-smart-module
 * **/
import { Module, createStore } from 'vuex-smart-module';
import { setting } from "./modules/settingModule";
import { field } from "./modules/fieldModule";
import {market} from "./modules/marketModule";

Vue.use(Vuex);

const root = new Module({
  modules: {
    setting,
    field,
    market,
  },
});
export const store = createStore(root);

// export default store;
export const settingModule = setting.context(store);
