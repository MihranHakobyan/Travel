let userIcone=document.querySelector(".fa-user")
let searchIcone=document.querySelector(".fa-search")
let loginForm=document.querySelector(".login-form")
let searchBar=document.querySelector(".search-bar")
let closeLogin=document.querySelector("#close-login")
let video=document.querySelector(".video")
let videos=document.querySelectorAll(".fa-circle")

userIcone.addEventListener("click",()=>{
    loginForm.classList.add("active")
    userIcone.classList.toggle("fa-times")
    searchBar.classList.remove("active")
    searchIcone.classList.remove("fa-times")
})


searchIcone.addEventListener("click",()=>{
    searchBar.classList.toggle("active")
    searchIcone.classList.toggle("fa-times")
    
})

closeLogin.addEventListener("click",()=>{
    loginForm.classList.remove("active")
    userIcone.classList.remove("fa-times")
})

window.onscroll = () => {
    searchBar.classList.remove("active")
    searchIcone.classList.remove("fa-times")

}


let sum = 0;
for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener("mouseenter", () => {
        for (let j = 0; j < videos.length; j++) {
            videos[j].classList.remove("active")
        }
        videos[i].classList.add("active")
        sum = i + 1
        video.innerHTML = "<video src=images/vid-" + sum + ".mp4 autoplay muted loop></video>"
    })
}

let swiper = new Swiper('.review-slider',{
    loop: true,
    spaceBetween: 50,
    autoplay: {
        delay: 2500,
    },
    breakpoints: {
        650:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        }
    }
})

let swiper1 = new Swiper('.brand-slider', {
    loop: true,
    autoplay:{
        delay: 2500,
    },
    breakpoints: {
        450:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
        980:{
            slidesPerView: 4,
        },
        1200:{
            slidesPerView: 5,
        }
    }
})
