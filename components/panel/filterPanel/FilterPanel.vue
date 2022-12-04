<template>
  <div class="grid">
    <vs-row justify="center">
      <field
        w="2"
        :field="fields.search"
        @change="onChange"
      >
      </field>
    </vs-row>

  </div>
</template>
<script lang="ts">
import {Component, Emit, Prop, Vue} from 'nuxt-property-decorator';

@Component({ components: {
  field: ()=> import('../../field/Field.vue')
  }})
export default class FilterPanel extends Vue {
  @Prop() fields: any
  value = '';
  @Emit('change')
  onChange(){  }

}


</script>
