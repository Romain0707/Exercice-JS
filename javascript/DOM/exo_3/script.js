const miniImg = document.querySelectorAll('.thumbnail');
const mainImg = document.getElementById('mainImage');



miniImg.forEach(img => {
    img.addEventListener('click', () => {
        mainImg.src = img.src;
    });
});
