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
        
        //CREATE UP AND DOWNVOTE BUTTONS
        const upvoteElement = document.createElement('button')
        upvoteElement.textContent = ('Upvote')
        upvoteElement.setAttribute("id", "upVote")
        upvoteElement.setAttribute("onclick", "upVote(this)")
        upvoteElement.setAttribute("value", `${entry.id}`)
        cardElement.appendChild(upvoteElement)
        console.log(upvoteElement)

        const downvoteElement = document.createElement('button')
        downvoteElement.textContent = ('Downvote')
        downvoteElement.setAttribute("id", "downVote")
        downvoteElement.setAttribute("onclick", "downVote(this)")
        downvoteElement.setAttribute("value", `${entry.id}`)
        cardElement.appendChild(downvoteElement)
        console.log(downvoteElement)

        //IMAGE - URL FOR EACH PICTURE 
        const imagelinkElement = document.createElement('img')
        imagelinkElement.src = (`${entry.imagelink}`)
        cardElement.appendChild(imagelinkElement)
        console.log(imagelinkElement)

        document.querySelector('#entries').appendChild(cardElement)

        })

            
    })
    .catch((err) => console.log(err))


    function upVote(button) {
        let postID = button.getAttribute("value")
        fetch(`/upvote/${postID}`, {
            method: 'put', 
        })
           
            
    }

    function downVote() {
       
    }

    //connect likes to counter
    //1. Go into app.js and create 2 put endpoints- a. upvote and b. downvote
    //2. Move upvote and downvote buttons from pug file to script.js 
    //3. Create two more fetch requests - upvotes and downvotesinside the fetch
    
    //upvotes and downvotes - loop
    