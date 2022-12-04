import axios from 'axios';
import {TestProductsInterface} from "../store/modules/marketModule/state1";

export async function apiTest(): Promise<TestProductsInterface[]> {
  const options = {
    baseURL: 'https://gist.githubusercontent.com/Bizhev/',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
  }
  const api = axios.create(options);

  const res  = await api.get('/f226e80b547976457fc2147155d3e4ab/raw/3a4faaeead972f39b20ab11049834952ed60cc0d/products.json')
  if (res?.data) {
    return res.data
  }
  return [];
}
