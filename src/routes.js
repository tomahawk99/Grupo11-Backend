const Router = require('koa-router');

const jwt = require('koa-jwt');

const router = new Router();

const vet = require('./routes/vet.js');
router.use('/vet',vet.routes());

const dentist = require('./routes/dentist.js');
router.use('/dentist',dentist.routes());

const centers = require('./routes/centers.js');
router.use('/centers',centers.routes());


router.use(jwt({secret : process.env.JWT_SECRET,key: 'tokendata'}));


module.exports = router;