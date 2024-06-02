document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 8000,
        },
        pagination: {
            el: '.dots',
            clickable: true,
        },
    });
});

function changeImage(imagePath) {
    document.getElementById('imageChange').src = imagePath;
}