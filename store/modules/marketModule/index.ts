import { Module } from 'vuex-smart-module';
import state from './state1';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export const market = new Module({
  state,
  getters,
  mutations,
  actions,
});
