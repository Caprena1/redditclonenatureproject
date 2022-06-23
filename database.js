const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const Pool = require('pg').Pool
const pool = new Pool ({
    user: "xcastudent",
    host: "localhost",
    database: "redditdb",
    password: "password",
    port: 5432
})

//GET THE USERS
const getEntries = (request, response) => {
    pool.query('SELECT * FROM entries ORDER BY likes DESC', (error, results) => {
        if(error) {
            console.log(error)
        }
        response.status(200).json(results.rows)
    })
}

const getEntryById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM entries WHERE id = $1', [id], (error, results) => {
        if(error) {
            console.log(error)
        }else {
            response.status(200).json(results.rows)
        }
    })
}

const createEntry = (request, response) => {
    const userLikes = 0
    const userTitle = request.body.title
    const userImg = request.body.imagelink

    pool.query('INSERT INTO entries (likes, title, imagelink) VALUES ($1, $2, $3)', [userLikes, userTitle, userImg], (error, results) => {
        if(error) {
            console.log(error)
        } else {
            response.status(201).send(`Entry added with ID: ${results.insertID}`)
        }
    })
}


const updateEntry = (request, response) => {
    const likes = parseInt(request.params.likes)
    pool.query('UPDATE entries SET likes = $1', [likes], (error, results) => {
        if(error) {
            console.log(error)
        } else {
            // console.log(results)
            response.status(200).json(results.rows)
        }
    })
}

const upVote = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('UPDATE entries SET likes = likes + 1 WHERE id = $1', [id], (error, results) => {
        if(error) {
            console.log(error)
        } else {
            console.log(results)
        }
    })
}

const downVote = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('UPDATE entries SET likes = likes - 1 WHERE id = $1', [id], (error, results) => {
        if(error) {
            console.log(error)
        } else {
            console.log(results)
        }
    })
}










module.exports = {
    getEntries,
    updateEntry,
    createEntry,
    getEntryById,
    upVote,
    downVote,
    
}