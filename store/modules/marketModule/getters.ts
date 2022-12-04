import { Getters } from 'vuex-smart-module';
import MarketState from "./state1";

export default class MarketGetters extends Getters<MarketState> {
get testProducts(){
  return this.state.testProducts;
}
}
