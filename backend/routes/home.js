const router = require('express').Router();

router.get('/home', (req, res) => {
	res.json('hello world')
})


module.exports = router;

