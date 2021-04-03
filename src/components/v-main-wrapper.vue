<template>
  <div class="v-main-wrapper">
    <header>
      <div class="container">
        <h2>eShop</h2>
        <v-search v-on:search="searchHandler"/>
        <button 
          class="cart-button" 
          type="button" 
          @click="cartRenderHandler"
          >Корзина <span v-if="cart.length != 0">{{ cart.length }}</span>
        </button>
      </div>
    </header>

    <div class="container">
      <main>
        <v-cart
          :is-cart-visible = 'isCartVisible'
          :cart-list = "cart"
        />
        <v-catalog
          :prod-list = "filtredGoods"
        />
      </main>
    </div>
  </div>
</template>

<script>
import VCart from './v-cart.vue';
import VCatalog from './v-catalog.vue';
import VSearch from './v-search.vue';

export default {
  name: "v-main-wrapper",
  components: {
    VSearch,
    VCatalog,
    VCart
  },
  props: {},
  data() {
    return {
      goods: [],
      filtredGoods: [],
      isCartVisible: false,
      cart: []
    };
  },
  methods: {
    cartRenderHandler() {
      return this.isCartVisible = !this.isCartVisible;
    },

    addToCartHandler(e) {
      const goodArt = e.target.dataset.art;
      const goodItem = this.filtredGoods.find(el => el.art == goodArt);

      fetch('http://127.0.0.1:3000/cart', {
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...goodItem
        })
      })
        // .then(res => res.json())
        // .then(res => console.log(res));
        .then( () => this.fetchCart())
    },

    reduceFromCartHandler(e) {
      const goodArt = e.target.dataset.art;
      const goodItem = this.filtredGoods.find(el => el.art == goodArt);

      fetch('http://127.0.0.1:3000/cart', {
        method: 'put',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...goodItem
        })
      })
      // .then(res => res.json())
      // .then(res => console.log(res));
        .then( () => this.fetchCart())
    },

    deleteFromCartHandler(e) {
      const index = e.target.dataset.index;

      fetch('http://127.0.0.1:3000/cart', {
        method: 'delete',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          index: index
        })
      })
      // .then(res => res.json())
      // .then(res => console.log(res));
      .then( () => this.fetchCart())
    },
    searchHandler(str) {
      if (str === '') {
        this.filtredGoods = this.goods;
      }
      const regexp = new RegExp(str, 'gi');
      this.filtredGoods = this.goods.filter((good) => regexp.test(good.title));
    },
    fetchGoods(){
      fetch('./goods.json')
      .then(response => response.json())
      .then(data => {
        this.goods = data;
        this.filtredGoods = data;
      })
      .catch(err => console.error('Fetch goods data error: ', err));
    },

    fetchCart(){
      fetch('./cart.json')
      .then(response => response.json())
      .then(data => {
        this.cart = data;
      })
      .catch(err => console.error('Fetch cart data error: ', err));
    }
  },

  created() {
    this.$root.$on('addItemToCart', (e) => {
        this.addToCartHandler(e);
      }),
      this.$root.$on('reduceFromCart', (e) => {
        this.reduceFromCartHandler(e);
      }),
      this.$root.$on('deleteFromCart', (e) => {
        this.deleteFromCartHandler(e);
      })
  },
  mounted() {
    this.fetchGoods();
    this.fetchCart();
  }
};
</script>

<style>
/* .v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
} */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f2f2f2;
}

.container {
  width: 100%;
  margin: 10px auto;
  display: flex;
}

main {
  margin: 0 auto;
}

header {
  background-color: white;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

header .container {
  justify-content: space-around;
  align-items: center;
}
.cart-button,
.add-button {
  padding: 0px 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  line-height: 2em;
  display: flex;
  align-items: center;
}

.cart-button:hover,
.add-button:hover {
  background-color: orange;
  transition: all 0.5s;
}

</style>