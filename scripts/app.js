
const cards = document.querySelectorAll(".card")


cards.forEach((card)=>{
    card.addEventListener("mouseover",()=>{
        const playButton = card.firstElementChild.lastElementChild
        playButton.classList.toggle("playButtonAnime")
        playButton.classList.remove("hide")
    })

    card.addEventListener("mouseout",()=>{
        const playButton = card.firstElementChild.lastElementChild
        playButton.classList.toggle("playButtonAnime")
        playButton.classList.toggle("hide")
    })
})