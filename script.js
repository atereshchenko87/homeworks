class Api {
    constructor(url) {
      this.url = url;
    }

    fetchPromise() {
      return new Promise((resolve, reject) => {
        fetch(this.url)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => reject(`Error:  Can't fetch data`) );
      }) 
    }
}

class GoodItem {
    constructor(title, price){
        this.title = title;
        this.price = price;
    }
    render(){
        return `<div class="goods-item">
        <div class="item-img">
            <img src="" alt="${this.title}">
        </div>
        <h3>${this.title}</h3>
        <p>${this.price}</p>
        <button class="add-button" type="button">Добавить</button>
    </div>`;
    }
}

class GoodsList {
    constructor(element){
        this.api = new Api('./goods.json');
        this.$el = document.querySelector(element);
        this.goods = [];
        this.total = 0;
        //this.filteredGoods = [];

        const fetch = this.api.fetchPromise();
        fetch.then( data => this.onFetchSuccess(data) )
            .catch( err => this.onFetchError(err) );
    }
  
    totalCost(){
        let total = 0;
        this.goods.forEach( good => {
            total += good.price;
        })
        //let total = this.goods.reduce( (total, item) => {total + item.price}, 0 )
        console.log(`Total cost: ${total}`);
    }

    onFetchSuccess(data) {
        this.goods = data.map(({title, price}) => new GoodItem(title, price));
        //this.filteredGoods = this.goods;
        this.render();
      }
  
    onFetchError(err) {
        this.$el.insertAdjacentHTML('beforeend', `<h3>${err}</h3>`);
      }

    render(){
      this.$el.textContent = '';
      this.goods.forEach( (good) => {
        this.$el.insertAdjacentHTML('beforeend', good.render());
      })
    }
}

class CartItem extends GoodItem{
    constructor(title, price, discount = 0, count = 1){
        super(title, price)
        this.discount = discount;
        this.count = count;
    };
    increase(){
        return count += 1;
    };
    reduce(){
        count -= 1;
        if (count <= 1) {count = 1}
        return count
    };
    totalItemCost(){
        let total = this.price * (100 - this.discount) * this.count;
        return total;
    };
    render(){};
}

class CartList {
    constructor(){
        this.list = [];
    };
    add(){};
    delete(){};
    totalCartCost(){};
    render(){};
} 

const goodsList = new GoodsList('.goods-list');
console.log(goodsList.totalCost())
setTimeout( ()=> {goodsList.totalCost()}, 1000)
//const cartList = new CartList();


