const newPost = document.querySelector('#newpostButton')
const upVote = document.querySelector('#upvoteButton')
const downVote = document.querySelector('#downvoteButton')


fetch('/entries')
    .then((response) => response.json()) 
    .then((entries) => {
        entries.forEach((entry) => {
            const cardElement = document.createElement('div')
            cardElement.classList.add('card')
            
            //TITLE OF EACH PICTURE
            const titleElement = document.createElement('h2')
            titleElement.textContent = (`${entry.title}`)
            cardElement.appendChild(titleElement)
            console.log(titleElement)

            //IMAGE - URL FOR EACH PICTURE 
            const imagelinkElement = document.createElement('img')
            imagelinkElement.src = (`${entry.imagelink}`)
            cardElement.appendChild(imagelinkElement)
            console.log(imagelinkElement)

            document.querySelector('#entries').appendChild(cardElement)
            })
    })
    .catch((err) => console.log(err))


    // postVote.addEventListener('click',_ => {
        // if(likes === upVote) {
        //     console.log("The Button Worked")
        //     return upVote++

        // }else {
        //     return downVote++
        // }




function updateEntry() {
    fetch('/entries', {
        method: 'put',
        // headers: {"Content-Type": "application/json"},
        // body:JSON.stringify()
    }).then(response => {
        console.log(response)
    })
}