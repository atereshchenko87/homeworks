<template>
  <div class="v-catalog">
    <!-- <h1>Catalog</h1> -->
    <!-- <err-msg v-if="isEmptyProd">Нет данных для отображения</err-msg> -->
    <v-error-msg v-if="isEmptyProd">Нет данных для отображения</v-error-msg>
    <v-catalog-item
      v-else
      v-for="prodItem in prodList"
      :key="prodItem.art"
      :prod-item="prodItem"
    />
    <!-- <div class="goods-list">
    <err-msg v-if="isEmptyProd">Нет данных для отображения</err-msg>
    <product-item 
      v-else 
      v-for="prodItem in prodList"
      :key="prodItem.art"
      :prod-item="prodItem"
    />     -->
    <!-- </div> -->
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import VErrorMsg from "./v-error-msg.vue";

export default {
  components: { 
    vCatalogItem, 
    VErrorMsg 
  },
  name: "v-catalog",
  data() {
    return {};
  },
  props: [
    'prodList'
  ],
  computed: {
    isEmptyProd() {
      if (this.prodList.length) return false;
      return true;
    }
  }
};
</script>

<style>
.v-catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
