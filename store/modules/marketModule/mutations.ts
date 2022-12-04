import { Mutations } from 'vuex-smart-module';
import MarketState, { TestProductsInterface } from "./state1";

export default class MarketMutations extends Mutations<MarketState> {
setProductsTest(data: TestProductsInterface[]){
  this.state.testProducts = data;
  }
}
