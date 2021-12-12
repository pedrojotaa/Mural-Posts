document.addEventListener('DOMContentLoaded', ()=> {
    updatePost()
})

function updatePost(){
    fetch('http://localhost:3000/all')
        .then(res => { return res.json() })
        .then(data => {
            
            let postElements = ''
             
            let posts = JSON.parse(JSON.stringify(data))
            
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

    if(title == 0 || description == 0){
        
    }

    let post = {title, description}

    const options = {
        method: 'POST',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(post)
    }

    fetch('http://localhost:3000/new', options)
        .then(res => {
            updatePost()
            document.querySelector('#title').value = ''
            document.querySelector('#description').value = ''
        })    
}

function deleteAll(){

    fetch('http://localhost:3000/delete', { method: 'DELETE' })
    updatePost()
}