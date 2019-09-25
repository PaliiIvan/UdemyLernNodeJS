import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import adminRoutes from './routes/admin.routes';
import shopRoutes from './routes/shop.routes';
import ErrorController from './controllers/error.controller';

import { sequelize } from "../src/util/database";
import { Product } from './models/product';
import { User } from './models/user';

const app = express();


app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.router);
app.use(shopRoutes);

app.use(ErrorController.Error404);

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    User.findByPk(1)
    .then(user => {
    })
});

const server = http.createServer(app);

server.listen(3000);
