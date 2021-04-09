<template>
  <div class="v-cart" v-if="isCartVisible">
    <h3>Корзина товаров на сумму {{ getCartTotal() }}</h3>
    <!-- <err-msg v-if="!isEmptyCart">Нет добавленных товаров</err-msg> -->
    <v-error-msg v-if="!isEmptyCart">Нет добавленных товаров</v-error-msg>
    <ul v-else>
      <li v-for="(good, index) in cartList" :key="good.art">
        <cart-item :cart-item="good" :cart-index="index"></cart-item>
      </li>
    </ul>
  </div>
</template>

<script>
import vErrorMsg from "./v-error-msg.vue";

export default {
  components: { vErrorMsg },
  name: "v-cart",
  data() {
    return {};
  },
  props: ["isCartVisible", "cartList"],
  computed: {
    isEmptyCart() {
      if (this.cartList.length) return true;
      return false;
    },
  },
  methods: {
    getCartTotal() {
      let total = 0;
      this.cartList.forEach((item) => {
        total += item.price * item.count;
      });
      return total;
      //this.cartTotal = this.cart.reduce( (total, item) => {total + item.price}, 0 );
      // console.log(this.cartTotal);
    },
  },
};
</script>

<style scoped>
.v-cart{
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  min-width: 800px;
}
.v-cart h3{
  align-self: center;
  margin-bottom: 10px;
}
.v-cart li {
  list-style: none;
  /* display: flex; */
  margin-bottom: 10px;
}
</style>
