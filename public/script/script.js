document.addEventListener('DOMContentLoaded', ()=> {
    updatePost()
})

function updatePost(){
    fetch('http://localhost:3000/api/all').then(res => {
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

}