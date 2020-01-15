const router = require('express').Router()

router.get('/', (req, res) => {

    res.send('base pencil')
})


router.get('/sharp', (req, res) => {

    res.send('sharp pencil')
})

module.exports = router