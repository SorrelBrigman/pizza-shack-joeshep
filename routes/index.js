'use strict';

const {Router} = require('express');
const router = Router();

//public routes
router.use(require('./about'))
router.use(require('./contact'))
router.use(require('./login'))
router.use(require('./register'))
router.use(require('./root'))


// login guard middleware Send them back home if not register


router.use((req, res, next)=>{
  if(req.isAuthenticated()){
    next();
  } else {
    res.redirect('/login')
  }
})

//private routes
router.use(require('./logout'))
router.use(require('./order'))

module.exports = router;
