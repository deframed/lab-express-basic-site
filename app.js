const express = require('express')
const app = express()

app.use( express.static(__dirname + '/public' ))


app.get('/:page', function (req, res) {

    let page = req.params.page
    

    switch(page) {
        case 'home':
            res.sendFile(__dirname + '/views/home.html')
            break
        case "about":
            res.sendFile(__dirname + '/views/about.html')
            break
        case "gallery":
            res.sendFile(__dirname + '/views/gallery.html')
            break
        case "works":
            res.sendFile(__dirname + '/views/works.html')
            break
        default:
            res.send('Page not found!')
    }
  })

  app.get('/:page', function (req, res) {

    let page = req.params.page
    

    
  })


  app.listen(3000)