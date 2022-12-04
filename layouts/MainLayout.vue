<template>
  <client-only>
  <div class="site">
    <header class="header">
      <HeaderView></HeaderView>
    </header>
    <div class="content">
      <Nuxt />
    </div>
    <footer class="footer">
      <FooterView></FooterView>
    </footer>
  </div>
  </client-only>
</template>
<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";
@Component({ components: {
  HeaderView: ()=>import('./page/HeaderView.vue'),
    FooterView: ()=>import('./page/FooterView.vue')
  }})
export default class MainLayout extends Vue {

}
</script>
<style lang="scss">
.site {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.header, .content, .footer {
  min-height: 100px;
}
.content {
  justify-content: center;
}
</style>
