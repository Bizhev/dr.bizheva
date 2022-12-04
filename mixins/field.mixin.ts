import {Component, Vue} from "nuxt-property-decorator";

@Component({
  components: {
    field: () => import('../components/field/Field.vue')
  }
})
export default class FieldMixin extends Vue {

}
