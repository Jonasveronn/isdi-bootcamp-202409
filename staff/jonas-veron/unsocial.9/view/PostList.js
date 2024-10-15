function PostList() {
    Compo.call(this, document.createElement('ul'))

    var title = new Heading('Posts', 3)
    this.add(title)

    try {
        var posts = getPosts().toReversed()

        posts.forEach(function (post) {
            var postItem = new PostItem(post.username, post.image, post.text, post.date, post.likes, post.likedBy)

            this.add(postItem)
        }.bind(this))
    } catch (error){
        alert(error.message)

        console.error(error)
    }
}

PostList.extends(Compo)