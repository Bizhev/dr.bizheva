<template>
  <vs-input
    :value="value"
    :label-placeholder="field.labelPlaceholder"
    @input="onInput"
  />
</template>
<script lang="ts">
import {Component, Vue, Prop, Emit} from "nuxt-property-decorator";
import { FieldTextInterface } from "./Interfaces";

@Component({})
export default class FieldText extends Vue {
  @Prop({}) field!: FieldTextInterface;
  @Prop({}) value!: any;

  @Emit('change')
  onChange(event: any) {
    return event;
  }

  @Emit('input')
  onInput(event: any){
    const data = {name: this.field.name, value: event};
    this.onChange(data);
    return data;
  }

}
</script>
