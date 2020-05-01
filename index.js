const express = require('express')
const app = express()
const pencilRoute = require('./pencilRoute')
const penRoute = require('./penRoute')
const brokenRoute = require('./brokenRoute')
const port = 3000

// the easiest way
app.get('/', (req, res) => res.send('Hello World!'))


// the router way
app.use('/pencil', pencilRoute)


// passing the app instance to a seperate file, penRoute exports a function
penRoute(app)



// this path does not work, we are trying to use the function way as a callback, but it is expecting the app parameter
app.use('/broken', brokenRoute)



// bellow is the mixing of both and throws a type error. trying to envoke the 'broken' route on listen does not work, only accepts callback
// app.use('/dont', brokenRoute(app))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
