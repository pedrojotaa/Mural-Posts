module.exports = {

    posts: [
        {
            id: 'fsdfsdf',
            title: 'test title',
            description: 'test description'
        }
    ],

    getAll(){
        return this.posts
    },

    newPost(title, description){
        return this.posts.push({id: generateID(), title, description})
    }
  
}

function generateID(){
    return Math.random().toString(36).substr(2, 9)
}