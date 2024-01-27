
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




// let songs_url = "http://127.0.0.1:5500/songs/"
// let songs = []

// async function getSongs(){
//     let a = await fetch(songs_url)
//     console.log(a)
//     a = await a.text()
//     console.log(a)

//     let div = document.createElement("div")
//     div.innerHTML = a

//     let as = div.querySelectorAll("a")
//     console.log(as)

    
//     for (const a of as) {
//         let href = a.getAttribute('href')
//         if(href.endsWith(".mp3")){
//             console.log(href)
//             songs.push(href)
//         }
//     }

//     console.log(songs)
    
// }
// getSongs()



// let body = document.querySelector("body")
// body.innerHTML="<audio controls autoplay muted>
// <source src=horse.ogg type='audio/mp3'>
// <source src="horse.mp3" type="audio/mpeg">
// Your browser does not support the audio element.
// </audio>"
