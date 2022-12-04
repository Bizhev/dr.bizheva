export interface TestProductsInterface {
  detail:"Lorem ipsum dolor sit amet",
  image: "http://placehold.it/300x300/999/CCC",
  info: "This is the latest and greatest product from Derp corp.",
  name: "Product 1",
  price: "99",
}

export default class MarketState {
testProducts: TestProductsInterface[] = [];
}
