const router = require('express').Router();
const { checkAuthorizedUser } = require('../middlewares/auth');
const NotFound = require('../Error/NotFound');

const cardsRouter = require('./cards');
const usersRouter = require('./users');

router.use(checkAuthorizedUser);
router.use('/users', usersRouter);
router.use('/cards', cardsRouter);
router.use((req, res, next) => next(new NotFound('Страницы по данному URL не существует')));

module.exports = router;
