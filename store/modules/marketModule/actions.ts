import { Actions } from 'vuex-smart-module';
import MarketState from "./state1";
import MarketGetters from "./getters";
import MarketMutations from "./mutations";
export default class MarketActions extends Actions<
  MarketState,
  MarketGetters,
  MarketMutations,
  MarketActions> {
  $init(){
    // this.actions.fetchTestProducts();
  }

}
