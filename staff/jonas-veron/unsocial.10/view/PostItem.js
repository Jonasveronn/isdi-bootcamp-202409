class PostItem extends Compo {
    constructor(username, image, text, date, likes, likedBy) {
    super(document.createElement('li'))

        const userTitle = new Heading(username, 4)
        this.add(userTitle)

        const picture = new Image(image)
        this.add(picture)

        const likesContainer = new Division()
        this.add(likesContainer)
        const buttonLikes = new Button('🤍', 'button')
        buttonLikes.container.style.cursor = 'pointer'
        likesContainer.add(buttonLikes)
        const countLikes = new Span(likes)
        likesContainer.add(countLikes)

        let hasLiked = false


    buttonLikes.addBehavior('click', () => {
    if(!hasLiked){
        likes++
        countLikes.setText(likes)
        buttonLikes.setText('❤️')
        hasLiked = true
        posts.likedBy = loggedInUser.username
        posts.likes = likes
        } else{
            buttonLikes.setText('🤍')
            likes--
            countLikes.setText(likes)
            hasLiked = false

            delete posts.likedBy[loggedInUser.username]
        }
    })
    const comment = new Paragraph(text)
    this.add(comment)

    const time = new Time(date)
    this.add(time)
    }
}



