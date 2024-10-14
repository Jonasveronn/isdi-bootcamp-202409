function createPost(username, image, text) {
    if (username.length < 4 || username.length > 12)
        throw new Error('invalid username') 

    var post = {
        image: image,
        text: text,
        username: username,
        date: new Date
    }

    posts.push(post)
}