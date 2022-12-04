<template>
  <div>
    <field
      w="12"
      :field="fields.countElementPage"
      @change="onChange"
    >

    </field>
    <field
      w="11"
      :field="fields.listType"
      @change="onChange"
    >
    </field>
  </div>
</template>
<script lang="ts">
import {Component, Emit, Prop, Vue} from "nuxt-property-decorator";

@Component({
  components: {
    field: ()=> import('../../field/Field.vue')
  }
})
export default class FilterSettingPanel extends Vue {
@Prop() fields: any
@Emit('change')
onChange(){}
}
</script>
