

function updatePost(){
    fetch('http://localhost:3000/api/all')
        .then(res => {
            return res.json()
        }).then(json => {

            let createElements = ''

            let posts = JSON.parse(json)

            posts.forEach((post) => {

                let createElement = `<div class="posts">
                                        <h3>${post.title}</h3>
                                        <p>${post.description}</p>
                                    </div>`
                createElements += createElement
            })
        })
}

function newPost(){

}