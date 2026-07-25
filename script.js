document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const slider = document.getElementById("slider");
  const totalSlides = slides.length;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  }

  window.nextSlide = function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  };

  window.prevSlide = function () {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  };

  window.goToSlide = function (index) {
    currentSlide = index;
    updateSlider();
  };

  window.closeMenu = function () {
    navMenu.classList.remove("active");
  };

  setInterval(window.nextSlide, 4000);

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const service = document.getElementById("service").value;
      const message = document.getElementById("message").value;

      const waText = `*New Lead from RBM Technology Website*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Service:* ${encodeURIComponent(service)}%0A*Requirements:* ${encodeURIComponent(message)}`;
      window.open(`https://wa.me/919392403845?text=${waText}`, "_blank");

      alert(
        "Inquiry successfully sent! WhatsApp application opened with your project details.",
      );
      this.reset();
    });
});
