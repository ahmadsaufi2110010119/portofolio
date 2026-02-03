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


// kirim ke email
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const loadingText = document.getElementById('loading');

form.addEventListener('submit', async function(e) {
  e.preventDefault(); // mencegah reload

  submitBtn.disabled = true;
  loadingText.classList.remove('hidden');

  const formData = new FormData(form);
  
  try {
    const response = await fetch('https://formspree.io/f/meeznnvj', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert('Pesan berhasil dikirim!');
      form.reset();
    } else {
      alert('Gagal mengirim pesan. Silakan coba lagi.');
    }
  } catch (error) {
    alert('Terjadi kesalahan: ' + error.message);
  } finally {
    submitBtn.disabled = false;
    loadingText.classList.add('hidden');
  }
});