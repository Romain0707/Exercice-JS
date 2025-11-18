const miniImg = document.getElementsByClassName('thumbnail')
const mainImg = document.getElementById('mainImage')





miniImg[0].addEventListener('click', function() {
    const link = miniImg[0].getAttribute('src')
    mainImg.setAttribute('src', link)
})

miniImg[1].addEventListener('click', function() {
    const link = miniImg[1].getAttribute('src')
    mainImg.setAttribute('src', link)
})

miniImg[2].addEventListener('click', function() {
    const link = miniImg[2].getAttribute('src')
    mainImg.setAttribute('src', link)
})

miniImg[3].addEventListener('click', function() {
    const link = miniImg[3].getAttribute('src')
    mainImg.setAttribute('src', link)
})