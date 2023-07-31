let breakingimg = document.querySelector("#breakingimg");
let breakingnews_title = document.querySelector("#breakingnews .title-news");
let breakingnews_description = document.querySelector("#breakingnews .description")
let topnews = document.querySelector(".topnews")
let sportsnews = document.querySelector("#sportsnews .newsbox")
let sandtnews = document.querySelector("#sandtnews .newsbox")
let economynews = document.querySelector("#economynews .newsbox")
let entertainmentnews = document.querySelector("#entertainmentnews .newsbox")
let header = document.querySelector(".header")
let bar = document.querySelector(".bar")
let menu = document.querySelector(".nav ul")
const toggle = (e) =>{
    bar.classList.toggle('active')
    menu.classList.toggle('activemenu')
}
bar.addEventListener('click',toggle)

window.addEventListener('scroll',()=>{
    if(window.scrollY>50){
        header.classList.add('sticky')
    }
    else{
    header.classList.remove('sticky')
    }
})
const apiKey = "950efe50270b4c6d9324d0b8591fca95"
// const apiKey = "29f8e42efe874ee2be23f0d1edb6844b"
const fetchData = async (category, pageSize) => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`
    const data = await fetch(url)
    const response = await data.json()
    console.log(response);
    return response.articles
}
const add_breakingnews = (data) => {
    breakingimg.innerHTML = `<img src=${data[0].urlToImage } alt="image">`
    breakingnews_title.innerHTML = `<a href=${data[0].url} target="_blank"><h2>${data[0].title}</h2></a>`
    breakingnews_description.innerHTML = `${data[0].description}`
}
fetchData(`general`, 5).then(add_breakingnews)
const add_topnews = (data) => {
    let html = ``
    data.forEach((element) => {
        if (element.title.length < 100) {
            title = element.title
        } else {
            title = element.title.slice(0, 100) + "..."
        }
        html += `<div class="news">
<div class="img">
    <img src=${element.urlToImage} alt="image" target="_blank">
</div>
<div class="text">
    <div class="newstitle">
    <a href=${element.url} target="_blank"><h3>${title}</h3></a>
    </div>
</div>
</div>`
    })
    topnews.innerHTML = html
}
fetchData('general', 20).then(add_topnews)

const add_sportsnews = (data) => {
    let html = ``
    data.forEach((element) => {
        if (element.title.length < 100) {
            title = element.title
        } else {
            title = element.title.slice(0, 100) + "..."
        }
        html += `<div class="newscard">
        <div class="img">
            <img src=${element.urlToImage} alt="image" target="_blank">
        </div>
        <div class="text">
            <div class="title">
            <a href=${element.url} target="_blank"><h3>${title}</h3></a>
            </div>
        </div>
        </div>`
    })
    sportsnews.innerHTML = html
}
fetchData('sports',5).then(add_sportsnews)
const add_sandtnews = (data) => {
    let html = ``
    data.forEach((element) => {
        if (element.title.length < 100) {
            title = element.title
        } else {
            title = element.title.slice(0, 100) + "..."
        }
        html += `<div class="newscard">
        <div class="img">
            <img src=${element.urlToImage} alt="image" target="_blank">
        </div>
        <div class="text">
            <div class="title">
            <a href=${element.url} target="_blank"><h3>${title}</h3></a>
            </div>
        </div>
        </div>`
    })
    sandtnews.innerHTML = html
}
fetchData('technology',5).then(add_sandtnews)
const add_economynews = (data) => {
    let html = ``
    data.forEach((element) => {
        if (element.title.length < 100) {
            title = element.title
        } else {
            title = element.title.slice(0, 100) + "..."
        }
        html += `<div class="newscard">
        <div class="img">
            <img src=${element.urlToImage} alt="image" target="_blank">
        </div>
        <div class="text">
            <div class="title">
            <a href=${element.url} target="_blank"><h3>${title}</h3></a>
            </div>
        </div>
        </div>`
    })
    economynews.innerHTML = html
}
fetchData('business',5).then(add_economynews)
const add_entertainmentnews = (data) => {
    let html = ``
    data.forEach((element) => {
        if (element.title.length < 100) {
            title = element.title
        } else {
            title = element.title.slice(0, 100) + "..."
        }
        html += `<div class="newscard">
        <div class="img">
            <img src=${element.urlToImage} alt="image" target="_blank">
        </div>
        <div class="text">
            <div class="title">
            <a href=${element.url} target="_blank"><h3>${title}</h3></a>
            </div>
        </div>
        </div>`
    })
    entertainmentnews.innerHTML = html
}
fetchData('entertainment',5).then(add_entertainmentnews)