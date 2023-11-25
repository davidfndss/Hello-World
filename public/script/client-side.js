const submitPostBtn = document.getElementById("submit-post-btn")
const textArea = document.getElementById("new-post-text-area")
const main = document.querySelector("main")
const appendNewPost = (username,text) => {
    const postDiv = document.createElement("div")
    postDiv.classList.add("post")
    postDiv.innerHTML = `<h2 class="username">${username}</h2>
    <h2>${text}</h2>
    <i class="bi bi-heart"></i>`
    main.appendChild(postDiv)
}

function createNewPost(username,text){
    // Post.create({
    // username: "username",
    // text: "text",
    // likes: 0
    // })
    appendNewPost(username,text)
}

submitPostBtn.addEventListener("click",createNewPost("me",textArea.value))
