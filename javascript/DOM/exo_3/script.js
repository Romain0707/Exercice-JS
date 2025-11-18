const miniImg = document.getElementsByClassName('thumbnail');
const mainImg = document.getElementById('mainImage');

Array.from(miniImg).forEach(img => {
    img.addEventListener('click', () => {
        mainImg.src = img.src;
    });
});
