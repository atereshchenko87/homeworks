class GoodsItem {
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
    constructor(){
        this.goods = [];
    }
    fetchGoods(){
        this.goods = [
            {title: 'Shirt', price: 150},
            {title: 'Socks', price: 50},
            {title: 'Jacket', price: 350},
            {title: 'Shoes', price: 250}
        ];
    }
    totalCost(){
        let total = 0;
        this.goods.forEach( good => {
            total += good.price;
        })
        console.log(`Total cost: ${total}`);
    }
    render(){
        let listHTML = '';
        this.goods.forEach( good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHTML += goodItem.render();
        });
        document.querySelector('.goods-list').insertAdjacentHTML('beforeend', listHTML);
    }
}

class CartItem extends GoodsItem{
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
    totalCartCost(){}
    render(){};
} 

const goodsList = new GoodsList();
goodsList.fetchGoods();
goodsList.render();
goodsList.totalCost();

const cartList = new CartList();