
module.exports = function (app) {

    app.get('/', (req, res) => {
        console.log('no-seeme')
        res.send('nope')
    })

    app.get('/nowork', (req, res) => {
        console.log('no-seeme')
        res.send('nope')
    })
}

