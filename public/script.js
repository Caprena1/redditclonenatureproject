const newPost = document.querySelector('#newpostButton')
// const upVote = document.querySelector('upvoteButton')
// const downVote = document.querySelector('downvoteButton')


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

        // TIMESTAMP
        const timeElement = document.createElement('h4')
        timeElement.textContent = (`Time Posted: ${entry.time_posted}`)
        cardElement.appendChild(timeElement)
        console.log(timeElement)

        //LIKES SHOWN
        const likesElement = document.createElement('h4')
        likesElement.textContent = (`Likes: ${entry.likes}`)
        cardElement.appendChild(likesElement)
        console.log(likesElement)

        //IMAGE - URL FOR EACH PICTURE 
        const imagelinkElement = document.createElement('img')
        imagelinkElement.src = (`${entry.imagelink}`)
        cardElement.appendChild(imagelinkElement)
        console.log(imagelinkElement)

        document.querySelector('#entries').appendChild(cardElement)
        })

        let counter = 0

        function upVote() {
            counter++

            document.getElementById('votes').innerHTML = counter
            
        }
        function downVote() {
            counter--

            document.getElementById('votes').innerHTML = counter
            
        }

        
    })
    .catch((err) => console.log(err))

        

        
    // function updateCounter() {
    //     let likes = document.getElementById('id')
    //     let value = 0
    //     upVote.addEventListener("click", () => {
    //         value++;
    //         likes.textContent = value
    //     })
    //     downVote.addEventListener("click", () => {
    //         value--;
    //         likes.textContent = value
    //     })

        
    // }


    let counter = 0

    function upVote() {
        counter++

        document.getElementById('votes').innerHTML = counter
        
    }
    function downVote() {
        counter--

        document.getElementById('votes').innerHTML = counter
        
    }

    //connect likes to counter
    //upvotes and downvotes - loop
    