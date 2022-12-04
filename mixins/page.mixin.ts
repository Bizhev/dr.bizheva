import {Component, Vue} from "nuxt-property-decorator";
import {store} from "../store";
@Component({})
export default class PageMixin extends Vue {
name = '* СТРАНИЦА НЕ ОПРЕДЕЛЕНА *';
get fields(){
  return store.getters['field/getFields'](this.name);
}

fieldChangeValue(payload: any){
  store.dispatch('field/setFieldValue', { ...payload, pageName: this.name });
}

mounted(){
  console.log({ fields: this.fields, store }, store.getters['market/testProducts']);
  store.dispatch('field/initPage', { pageName: this.name });
}
}
