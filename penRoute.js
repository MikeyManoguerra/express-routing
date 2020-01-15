module.exports = function (app) {

    app.get('/pen/', (req, res)=>{
        res.send('pen')
    })

    app.get('/pen/ballpoint', (req, res)=>{
        res.send('ballpoint')
    })
}

