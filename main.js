function leaveComment(){
    let commentText = document.querySelector('textarea').value
    let key = localStorage.length
    localStorage.setItem(String(key),commentText)
    let newComment = document.createElement('p')
    newComment.innerText = localStorage.getItem(String(key))
    document.querySelector('.comment_section').prepend(newComment)
}