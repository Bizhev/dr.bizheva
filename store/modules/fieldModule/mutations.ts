import { Mutations } from 'vuex-smart-module';
import FieldState from "./state1";

export default class FieldMutations extends Mutations<FieldState> {
  setFieldValue(payload:any){
    // @ts-ignore
    this.state.fields[payload.pageName][payload.field.name] = payload.field;
  }

  setPageName(name: string){
    this.state.pageName = name;
  }
}
