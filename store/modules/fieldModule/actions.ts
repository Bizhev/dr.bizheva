import { Actions } from 'vuex-smart-module';
import FieldState from "./state1";
import FieldGetters from "./getters";
import FieldMutations from "./mutations";

export default class FieldActions extends Actions<
  FieldState,
  FieldGetters,
  FieldMutations,
  FieldActions> {
setFieldValue(payload:any){

  // @ts-ignore
  const field :any = this.state.fields[payload.pageName][payload.name];
  field.value = payload.value;
  this.mutations.setFieldValue({field, pageName: payload.pageName})
}

initPage(payload: any) {
console.log({ payload });
}

}
