<template>
  <div class="v-catalog-item">
      <div class="item-img">
        <img :src=prodItem.link :alt=prodItem.title>
      </div>
      <h3>{{ prodItem.title }}</h3>
      <p>{{ prodItem.price }}</p>
      <button class="add-button" :data-art=prodItem.art type="button" @click="addToCart">Добавить</button>
    </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  data() {
    return {};
  },
  props: ['prodItem'],
  methods: {
    addToCart(e) {
      // console.log('from product-item ', e.target);
      this.$root.$emit('addItemToCart', e)
    }
  }
};
</script>

<style scoped>
.v-catalog-item {
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white;
  width: 200px;
  height: 250px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* flex: 1 18%; */
}

.item-img {
  align-self: center;
  width: 150px;
  height: 150px;
  border: 1px solid #f2f2f2;
  margin-bottom: 10px;
  overflow: hidden;
}
.item-img img{
  width: 100%;
  height: 100%;
}

.add-button {
  align-self: flex-end;
}
</style>
