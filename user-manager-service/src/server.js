const express = require('express');
const usersDb = require('./users-db');
const port = 3000;
const app = express();

app.get('/v1/user-manager/users/:userId', (req, resp) => {
    var userId = req.params.userId;

    var user = usersDb.find(c => c.id == userId);

    console.table(user);

    if(user == undefined)
        resp.status(404).json({message: 'user not found'});
    else
        resp.status(200).json(user);

    resp.end();
});

app.listen(port, () => {
        console.log(`Api user-manager listening on port ${port}`)
});