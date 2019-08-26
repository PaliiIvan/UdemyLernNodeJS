import path from 'path';
import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('In the midd');
    res.sendFile(path.join(__dirname, '../', 'views','shop.html'));
});

export = router;