// Поиск
Vue.component('search', {
  template: `<input id="search" v-model="searchStr" v-on:input="search">`,
  data() {
    return {
      searchStr: ''
    }
  },
  methods: {
    search() {
      this.$emit('search', this.searchStr)
    }
  }

})

// Список товаров
Vue.component('product-list', {
  template: `
  <div class="goods-list">
    <err-msg v-if="isEmptyProd">Нет данных для отображения</err-msg>
    <product-item 
      v-else 
      v-for="prodItem in prodList"
      :key="prodItem.art"
      :prod-item="prodItem"
    />    
  </div>
  `,
  props: [
    'prodList'
  ],
  computed: {
    isEmptyProd() {
      if (this.prodList.length) return false;
      return true;
    }
  }
});

// Карточка товара
Vue.component('product-item', {
  template: `
    <div class="goods-item" >
      <div class="item-img">
        <img :src=prodItem.link :alt=prodItem.title>
      </div>
      <h3>{{ prodItem.title }}</h3>
      <p>{{ prodItem.price }}</p>
      <button class="add-button" :data-art=prodItem.art type="button" @click="addToCart">Добавить</button>
    </div>
  `,
  props: ['prodItem'],
  methods: {
    addToCart(e) {
      // console.log('from product-item ', e.target);
      this.$root.$emit('addItemToCart', e)
    }
  }
})

// Корзина
Vue.component('cart-list', {
  template: `
  <div class="cart-list" v-if="isCartVisible">
    <h3>Корзина товаров на сумму {{getCartTotal()}}</h3>
    <err-msg v-if="!isEmptyCart">Нет добавленных товаров</err-msg>
    <ul v-else>
      <li v-for="(good, index) in cartList" :key="good.art">
        <cart-item
          :cart-item="good"
          :cart-index="index"
        ></cart-item>
      </li>
    </ul>
  </div>
  `,
  props: [
    'isCartVisible',
    'cartList'
  ],
  computed: {
    isEmptyCart() {
      if (this.cartList.length) return true;
      return false;
    }
  },
  methods: {
    getCartTotal() {
      let total = 0;
      this.cartList.forEach(item => {
        total += item.price * item.count;
      })
      return total;
      //this.cartTotal = this.cart.reduce( (total, item) => {total + item.price}, 0 );
      // console.log(this.cartTotal);
    }
  }
});

// Товар в корзине
Vue.component('cart-item', {
  template: `
    <div class="cart-item">
      <div>Наименование: {{ cartItem.title }}</div>
      <div>Цена: {{ cartItem.price }}</div>
      <div>Кол-во: 
        <button class="minus" :data-art=cartItem.art @click="reduceFromCart">-</button>  
        {{ cartItem.count }}  
        <button class="plus" :data-art=cartItem.art @click="addToCart">+</button>
      </div>
      <div>Стоимость: {{ cartItem.price * cartItem.count }}</div>
      <button :data-index=cartIndex @click="deleteFromCart">Удалить</button>
    </div>
  `,
  props: [
    'cartItem',
    'cartIndex'
  ],
  methods: {
    addToCart(e) {
      this.$root.$emit('addItemToCart', e)
    },
    reduceFromCart(e) {
      this.$root.$emit('reduceFromCart', e)
    },
    deleteFromCart(e) {
      this.$root.$emit('deleteFromCart', e)
    }
  }
})

// Сообщение об ошибке
Vue.component('err-msg', {
  template: `<p class="noData"><slot></slot></p>`,
})

// MAIN
const vue = new Vue({
  el: "#app",
  data: {
    goods: [],
    filtredGoods: [],
    isCartVisible: false,
    cart: []
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
})