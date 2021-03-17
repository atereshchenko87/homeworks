const API_URL = './goods.json';

const vue = new Vue({
  el: "#app",
  data: {
    goods: [],
    filtredGoods: [],
    search: '',
    isCartVisible: false,
    cart: []
  },
  methods: {
    cartRenderHandler() {
      return this.isCartVisible = !this.isCartVisible;
    },

    addToCartHandler(e) {
      const goodArt = e.target.dataset.art;
      const itemInCart = this.cart.find(el => el.art == goodArt);
      if (itemInCart !== undefined) {
        itemInCart.count += 1;
      } else {
        const goodItem = this.goods.find(el => el.art == goodArt);
        this.cart.push({...goodItem, count: 1});
      }
    },

    reduceFromCartHandler(e) {
      const goodArt = e.target.dataset.art;
      const itemInCart = this.cart.find(el => el.art == goodArt);
      if (itemInCart !== undefined && itemInCart.count > 1 ) {
        itemInCart.count -= 1;
      }
    },

    deleteFromCartHandler(e) {
      const index = e.target.dataset.index;
      this.cart.splice(index, 1);
    },

    getCartTotal(){
      let total = 0;
      this.cart.forEach( item => {
          total += item.price * item.count;
      })
      return total;
      //this.cartTotal = this.cart.reduce( (total, item) => {total + item.price}, 0 );
      // console.log(this.cartTotal);
    },

    searchHandler() {
      if (this.search === '') {
        this.filtredGoods = this.goods;
      }
      const regexp = new RegExp(this.search, 'gi');
      this.filtredGoods = this.goods.filter((good) => regexp.test(good.title));
    },

    getData() {
      return new Promise((resolve, reject) => {
        fetch(API_URL)
          .then(response => response.json())
          .then(json => resolve(json))
          .catch(err => reject(`Fetch error:  Can't fetch data. ${err}`));
      })
    }

  },
  computed: {
    hasData() {
      if (this.goods.length) return true;
      return false;
    },
    isEmptyCart(){
      if (this.cart.length) return true;
      return false;
    }
  },
  mounted() {
    this.getData()
      .then(data => {
        this.goods = data;
        this.filtredGoods = data;
      })
      .catch(err => {
        console.error('getData error: ', err);
      })
  }
})