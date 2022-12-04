
import { Getters } from 'vuex-smart-module';
import FieldState from "./state1";

export default class FieldGetters extends Getters<FieldState> {
getFields(pageName: string): unknown {
  if ( Object.hasOwn(this.state.fields, pageName )) {
    // @ts-ignore
    return this.state.fields[pageName];
  }
  return {}
}

get pageName(){
  return this.state.pageName;
}

getFieldValueByName(name: string): any{
  if (this.getters.pageName && Object.hasOwn(this.state.fields, this.pageName)) {
    // if (Object.hasOwn(this.state.fields[this.pageName], name)) {
    //   return this.state.fields[this.pageName][name];
    // }

  }
  console.log({ name });
}
}
