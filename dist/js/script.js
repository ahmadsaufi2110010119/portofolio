// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active"),
        navMenu.classList.toggle("hidden")
})


// navbar fixed
window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }
}


// pop up 
const images = document.querySelectorAll('.portfolio-img');
const modal = document.getElementById('imgModal');
const modalImg1 = document.getElementById('modalImg1');
const modalImg2 = document.getElementById('modalImg2');
const closeBtn = document.getElementById('closeModal');

images.forEach(img => {
    img.addEventListener('click', function () {
        modal.classList.remove('hidden');
        modal.classList.add('flex');

        modalImg1.src = this.src; // gambar utama
        modalImg2.src = this.getAttribute('data-img2'); // gambar kedua
    });
});

closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
});