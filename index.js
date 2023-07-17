

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


let postsCounter = 0

function setPosts(array) {
    let render = ''

    for(let i = 0; i < array.length; i++) {
        postsCounter += 1
        render += 
        `<div class="card">
            <div class="card-header">
                <img class="avatar" src=${array[i].avatar}>
                <div class="header-description">
                    <strong><p>${array[i].name}</p></strong>
                    <p>${array[i].location}</p>
                </div>
            </div>
            <img class="post-image" src=${array[i].post}>
            <img class="post-heart" id="heart-el${i}" src="images/icon-heart-active.png">    
            <div class="description--container">
                <div class="buttons-container">
                    <button class="like-btn" id="${i}"><img src="images/icon-heart.png" id="heart-img" ></button>
                    <button><img src="images/icon-comment.png"></button>
                    <button><img src="images/icon-dm.png"></button>
                </div>
                <strong><p>${array[i].likes} likes</p></strong>
                <strong><p>${array[i].username}</strong> ${array[i].comment}</p>
            </div>
            <hr class="separator">
        </div>`
    }
    return render
}

//references
const postsEl = document.getElementById('posts-el')

const postsList =setPosts(posts)
postsEl.innerHTML = postsList
 


const lista = document.getElementsByClassName('like-btn')

for(let i = 0; i < lista.length; i++) {
    let element = document.getElementById(`heart-el${i}`)
    let heartImgEl = document.getElementById(`heart-img${i}`)
    lista[i].addEventListener('click', function(){
        //console.log('ID?',i);
        //console.log('ID heart', element);
        element.style.display = 'block'
        setTimeout(() => {
            element.style.display = 'none'
        },1000)
    })
}
