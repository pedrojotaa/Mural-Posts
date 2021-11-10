document.addEventListener('DOMContentLoaded', ()=> {
    updatePost()
})

function updatePost(){
    fetch('http://192.168.0.14:3000/api/all')
        .then(res => {
            return res.json()
        }).then(json => {

            let postElements = ''
             
            let posts = JSON.parse(json)

            posts.forEach((post) => {

                let postElement = `<div class="posts" id="${post.id}">
                                        <h3>${post.title}</h3>
                                        <p>${post.description}</p>
                                    </div>`
                postElements += postElement
            })
            let mural = document.querySelector('#posts-mural')
            mural.innerHTML = postElements
        })
}

function newPost(){

    let title = document.querySelector('#title').value
    let description = document.querySelector('#description').value

    let post = {title, description}

    const options = {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(post)
    }

    fetch('http://192.168.0.14:3000/api/new', options)
        .then(res => {
            updatePost()
            document.querySelector('#title').value = ''
            document.querySelector('#description').value = ''
        })    

    
}