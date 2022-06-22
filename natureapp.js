const express = require('express')
const bodyParser = require('body-parser')
const db = require('./database')


const app = express()

//SET MY VIEWS ENGINE
app.set('views', './views')
app.set('view engine', 'pug')

//SETTING USE FOR BODY-PARSER AND FOE CSS PAGE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.use('/images', express.static('public'))
app.use('/styles', express.static('styles'))


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/entries', db.getEntries)
app.get('/entries/:id', db.getEntryById)

app.put('/entries', db.updateEntry)

app.post('/entries', db.createEntry)


app.listen(3000)
//TODO LIST:
//GET POST - GET - DONE
//CREATE DUMMY DATA - DONE
//1. Make script.js - DONE
    //PUG FILE CANNOT COMMUNICATE DIRECTLY WITH DATABASE, SO WE HAVE
    //MAKE A SCRIPT FILE (PUBLIC FOLDER)
    //IN ORDER TO CONNECT PUG FILE TO DB THROUGH EXPRESS APP - MAKE A
    //SEPARATE JS FILE 
//2. Make script tag (for PUG FILE)-DONE
//3. Make a fetch to ('/entries) in the SCRIPT FILE (route already exists in app file)-DONE
//4. PARSE object (pull properties from object) - DONE
//5. THINK ABOUT CARDS THAT WE MADE FOR ZOO API and WEATHER API (document.create....)
    //we need to take data from script file to pug file - DOING A CARD - DONE

//CREATE ENTRIES - POST -DONE

//UPDATE ENTRIES - PUT -DONE
//CREATE UPVOTES AND DOWNVOTES
//MAKE A CARD - CSS - DONE



//MVP
//LOOK AT POST
//ADDING A POST

//THINGS THIS WILL INCLUDE:
//DATABASE
//API
//EACH CARD SHOULD INCLUDE- LIKES, TIME, IMAGE 
//write in posts
//prioritize them based on likes
