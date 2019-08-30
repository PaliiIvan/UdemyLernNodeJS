import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import adminRoute from './routes/admin';
import shopRoute from './routes/shop';

const app = express();
app.set('view engine', 'ejs');
app.set('views', `src/views`);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoute.router);
app.use(shopRoute);


app.use((req, res, next) => {
    res.status(404).render('handlebars-views/404', { pageTitle: 'Page Not Found' });
})
const server = http.createServer(app);

server.listen(3000);