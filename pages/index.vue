<template>
  <div>INDEX</div>
</template>
<script lang="ts">
import {Component, mixins} from "nuxt-property-decorator";
import PageMixin from "../mixins/page.mixin";

@Component({
  layout: 'MainLayout',
})
export default class Index extends mixins(PageMixin){
  // Уникальное имя страницы
  name = 'mainPage';
}
</script>
<style lang="scss">

</style>
