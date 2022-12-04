<template>
  <div class="main">
    <div class="main__sidebar">
      <FilterSettingPanel
        :fields="fields"
        @change="fieldChangeValue"
      ></FilterSettingPanel>
    </div>
    <div class="main__content content">
      <div class="content__filter">
        <filter-panel
          :fields="fields"
          :data="data"
          @change="fieldChangeValue"
        ></filter-panel>
      </div>
      <div class="content__data">
        <component
          :is="typeListContent"
        >

        </component>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator';
import PageMixin from "../../mixins/page.mixin";

@Component({
  components: {
    FilterPanel: ()=> import('../../components/panel/filterPanel/FilterPanel.vue'),
    FilterSettingPanel: ()=> import('../../components/panel/filterSettingPanel/FilterSettingPanel.vue')
  },

  layout: 'MainLayout',
})
export default class IndexPage extends mixins(PageMixin) {
  data = [];
  // Уникальное имя страницы
  name = 'filterPage';
  // Вычисляет какой компонент отображать в качестве данных
  get typeListContent(){
    // const type = this.$store.getters['field/getFieldValueByName']('listType');
    // console.log({ type });
    return '';
  }

test(event: any){
  console.log('END:', { event }, this.$store);
}
}
</script>
<style lang="scss">
.main {
  display: flex;
  flex-direction: row;
  &__sidebar{
    max-width: 150px;
  }
  &__content {
    display: flex;
    justify-content: center;
  }
}
</style>

