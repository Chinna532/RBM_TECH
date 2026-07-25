document.addEventListener("DOMContentLoaded", () => {
  // Mobile Hamburger Toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Navigation Close Helper
  window.closeMenu = function () {
    navMenu.classList.remove("active");
  };

  // Slider Logic
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

  setInterval(window.nextSlide, 4000);

  // Resume Form Submission (Pure JavaScript logic)
  const resumeForm = document.getElementById("resumeForm");
  if (resumeForm) {
    resumeForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("applicantName").value;
      const role = document.getElementById("applicantRole").value;
      const phone = document.getElementById("applicantPhone").value;
      const email = document.getElementById("applicantEmail").value;
      const resumeLink = document.getElementById("resumeLink").value;
      const channel = document.getElementById("submissionChannel").value;

      if (channel === "whatsapp") {
        // Build WhatsApp text message
        const waMessage = `*New Resume Submission - RBM Technology*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Role:* ${encodeURIComponent(role)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Email:* ${encodeURIComponent(email)}%0A*Resume Link:* ${encodeURIComponent(resumeLink)}`;
        window.open(`https://wa.me/919392403845?text=${waMessage}`, "_blank");
        alert("Redirecting to WhatsApp to submit your resume details!");
      } else if (channel === "email") {
        // Build Mailto deep link
        const emailSubject = encodeURIComponent(
          `Job Application: ${role} - ${name}`,
        );
        const emailBody = encodeURIComponent(
          `Hi RBM Technology Team,\n\nI would like to apply for the position of ${role}.\n\nCandidate Details:\n- Name: ${name}\n- Phone: ${phone}\n- Email: ${email}\n- Resume/Portfolio Link: ${resumeLink}\n\nLooking forward to hearing from you!\n\nBest regards,\n${name}`,
        );
        window.location.href = `mailto:rajeshbanoth2002@gmail.com?subject=${emailSubject}&body=${emailBody}`;
        alert("Opening email client to submit your resume details!");
      }

      this.reset();
    });
  }

  // General Inquiry Contact Form Handler
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
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
  }
});
