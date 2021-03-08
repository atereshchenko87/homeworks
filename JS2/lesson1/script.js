const goods = [
    {title: 'Shirt', price: 150},
    {title: 'Socks', price: 50},
    {title: 'Jacket', price: 350},
    {title: 'Shoes', price: 250},
    
];

const renderGoodsItem = ({title,price}) => {
    return `<div class="goods-item">
        <div class="item-img">
            <img src="" alt="${title}">
        </div>
        <h3>${title}</h3>
        <p>${price}</p>
        <button class="add-button" type="button">Добавить</button>
    </div>`;
};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(item => renderGoodsItem(item)).join('\n');
    document.querySelector('.goods-list').insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList();