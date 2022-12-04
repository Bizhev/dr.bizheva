import { Actions } from 'vuex-smart-module';
import SettingMutations from "./mutations";
import SettingGetters from "./getters";
import SettingState from "./state1";

export default class SettingActions extends Actions <SettingState,
  SettingGetters,
  SettingMutations,
  SettingActions> {

}
