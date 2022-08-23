const express = require('express');
const ordersDb = require('./orders-db');
const port = 3001;
const app = express();

app.get('/v1/order-manager/users/:userId', (req, resp) => {
    var userId = req.params.userId;

    var orders = ordersDb.filter(c => c.userId == userId);

    console.table(orders);

    if(orders == undefined)
        resp.status(404).json({message: 'orders not found'});
    else
        resp.status(200).json(orders);

    resp.end();
});


app.listen(port, () => {
        console.log(`Api order-manager listening on port ${port}`)
});