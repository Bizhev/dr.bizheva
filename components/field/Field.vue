<template>
  <vs-col :w="w">
    <component
      :is="fieldComponent"
      :field="field"
      :value="field.value"
      @change="onChange"
      @input="onInput"
    >
    </component>
  </vs-col>
</template>
<script lang="ts">
// TODO: Сейчас сюда попадает field из компонента, в будущем можно сделать для них отдельные сущности
import {Component, Emit, Prop, Vue} from "nuxt-property-decorator";
import { FieldInterface } from "./_partials/Interfaces";

@Component({
  components: {
    fieldText: () => import('./_partials/FieldText.vue'),
    fieldBoolean: () => import('./_partials/FieldBoolean.vue'),
  }
})
export default class Field extends Vue {
  @Prop({
    required: false,
    default: 'text',
  }) field!: FieldInterface

@Prop({
  required: false,
  default: '12',
}) w!: string

  get fieldComponent(){
  // Можно реализовать в структуру map/set в будущем
    let result = '';
    switch (this.field.type) {
      case 'text':
        result = 'fieldText';
        break;
      case 'boolean':
        result = 'fieldBoolean';
        break;
      default:
        result = 'fieldText'
    }
    return result
  }

  @Emit('change')
  onChange() {}

  @Emit('input')
  onInput() {}


}
</script>
