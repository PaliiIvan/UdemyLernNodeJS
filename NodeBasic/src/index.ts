import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import adminRoute from './routes/admin';
import shopRoute from './routes/shop';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoute);
app.use(shopRoute);


app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, './', 'views', '404.html'));
})
const server = http.createServer(app);

server.listen(3000);