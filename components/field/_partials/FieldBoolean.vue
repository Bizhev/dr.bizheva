<template>
  <vs-switch square :value="value" @change="onChange" @click="onChange">
    <template #off>
      {{ field.textOff }}
    </template>
    <template #on>
      {{ field.textOn }}
    </template>
  </vs-switch>
</template>
<script lang="ts">
import {Component, Vue, Prop, Emit} from "nuxt-property-decorator";
import {FieldSwitchInterface} from "./Interfaces";

@Component({})
export default class FieldSwitch extends Vue {

@Prop() field!: FieldSwitchInterface;

@Prop() value!: any;

@Emit('change')
onChange(){
  return {name: this.field.name, value : !this.value};
}
}
</script>
