const router = require('express').Router();
let Data = require('../models/udemydatas');

router.get('/', async (req, res) => {
  try {
    datas = await Data.find().lean();
    res.render('index', { datas });
  } catch (err) {
    console.error(err);
  }
});

//fetch data by id
router.get('/fetch/:id', (req, res) => {
  Data.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// delete all data
router.delete('/deleteall', (req, res) => {
  Data.deleteMany()
    .then(() => res.json('User deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
