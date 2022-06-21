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
    pool.query('SELECT * FROM entries ORDER BY id', (error, results) => {
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
    const userLikes = req.params.userLikes

    pool.query('INSERT INTO entries (likes) VALUES ($1, $2)', [userLikes], (error, results) => {
        if(error) {
            console.log(error)
        } else {
            response.status(201).send(`User added with ID: ${results.insertID}`)
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






module.exports = {
    getEntries,
    updateEntry,
    createEntry,
    getEntryById,
    
}