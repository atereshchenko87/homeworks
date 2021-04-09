const express = require('express');
const fs = require('fs');

const app = express();

app.listen(3000, () => {
  console.log('Server is running at port 3000')
})

app.use(express.static('./public'));
app.use(express.json());

// main page
app.get('/', (req, res) => {
  fs.readFile('./index.html', 'utf-8', (err, data) => {
    if (!err) {
      if (data.length) {
        res.header('Content-Type', 'text/html')
        res.end(data);
      }
    }
  })
})

//goods
app.get('/goods', (req, res) => {
  fs.readFile('./goods.json', 'utf-8', (err, data) => {
    if (!err) {
      if (data.length) {
        res.header('Content-Type', 'application/json')
        res.end(data);
      } else {
        res.header('Content-Type', 'text/plain')
        res.end('Нет данных');
      }
    }
  })
})

//cart
app.get('/cart', (req, res) => {
  fs.readFile('./cart.json', 'utf-8', (err, data) => {
    if (!err) {
      if (data.length) {
        res.header('Content-Type', 'application/json')
        res.end(data);
      } else {
        res.header('Content-Type', 'text/plain')
        res.end('Нет данных');
      }
    }
  })
})

app.post('/cart', (req, res) => {
  fs.readFile('./cart.json', 'utf-8', (err, data) => {
    if (!err) {
      const cart = JSON.parse(data || '[]');
      const itemIndex = cart.findIndex(el => el.art == req.body.art);
      if (itemIndex !== -1) {
        cart[itemIndex].count ++;
        fs.appendFile('./stats.json', getFormattedDate() +' увеличено количество товара: '+ cart[itemIndex].title +', артикул: '+ cart[itemIndex].art + '\n', (err) => {
          if (err) throw err;
        });
      } else {
        cart.push({...req.body, count: 1});
        fs.appendFile('./stats.json', getFormattedDate() +' добавлен товар: '+ req.body.title +', артикул: '+ req.body.art + '\n', (err) => {
          if (err) throw err;
        });
      }
      fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
        if (err) throw err;
      });
      
      res.end(JSON.stringify(cart));
    }
  })
})

app.put('/cart', (req, res) => {
  fs.readFile('./cart.json', 'utf-8', (err, data) => {
    if (!err) {
      const cart = JSON.parse(data || '[]');
      const itemIndex = cart.findIndex(el => el.art == req.body.art);
      if (itemIndex !== -1 && cart[itemIndex].count > 1 ) {
        cart[itemIndex].count --;
        fs.appendFile('./stats.json', getFormattedDate() +' уменьшено количество товара: '+ cart[itemIndex].title +', артикул: '+ cart[itemIndex].art + '\n', (err) => {
          if (err) throw err;
        });
      }
      fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
        if (err) throw err;
      });
      res.end(JSON.stringify(cart));
    }
  })
})

app.delete('/cart', (req, res) => {
  fs.readFile('./cart.json', 'utf-8', (err, data) => {
    if (!err) {
      const cart = JSON.parse(data || '[]');
      let deleted = [];
      deleted = cart.splice(req.body.index, 1);
      // console.log(deleted);
      fs.appendFile('./stats.json', getFormattedDate() +' удален товар: '+ deleted[0].title +', артикул: '+ deleted[0].art + '\n', (err) => {
        if (err) throw err;
      });
      fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
        if (err) throw err;
      });
      res.end(JSON.stringify(cart));
    }
  })
})

// stats
app.get('/stats', (req, res) => {
  fs.readFile('./stats.json', 'utf-8', (err, data) => {
    if (!err) {
      if (data.length) {
        res.header('Content-Type', 'text/plain')
        res.end(data);
      }
    }
  })
})

function getFormattedDate(){
  return new Date().toLocaleString("ru", {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  })
}