// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');

  // Mobile menu toggle
  mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Handle navigation clicks
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const isDropdown = this.classList.contains('dropdown-toggle');

      // Handle dropdown
      if (isDropdown) {
        e.preventDefault();
        // Close all dropdowns first
        dropdownMenus.forEach(menu => menu.classList.remove('open'));

        // Toggle only the clicked dropdown
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle('open');
        return;
      }

      // For normal nav links
      e.preventDefault();

      // Close dropdowns
      dropdownMenus.forEach(menu => menu.classList.remove('open'));

      // Set active state
      navLinks.forEach(navLink => navLink.classList.remove('active'));
      this.classList.add('active');

      // Show correct page
      pages.forEach(page => page.classList.remove('active'));
      const targetPage = document.getElementById(this.getAttribute('data-page'));
      if (targetPage) targetPage.classList.add('active');

      // Close mobile nav if open
      mobileMenu.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Close dropdown if clicking outside
  document.addEventListener('click', (e) => {
    const isClickInsideDropdown = e.target.closest('.dropdown');
    if (!isClickInsideDropdown) {
      dropdownMenus.forEach(menu => menu.classList.remove('open'));
    }
  });

  // Default active page
  document.querySelector('[data-page="home"]').classList.add('active');
});
// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');

  // Mobile menu toggle
  mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Handle navigation clicks
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const isDropdown = this.classList.contains('dropdown-toggle');

      // Handle dropdown
      if (isDropdown) {
        e.preventDefault();
        // Close all dropdowns first
        dropdownMenus.forEach(menu => menu.classList.remove('open'));

        // Toggle only the clicked dropdown
        const dropdownMenu = this.nextElementSibling;
        dropdownMenu.classList.toggle('open');
        return;
      }

      // For normal nav links
      e.preventDefault();

      // Close dropdowns
      dropdownMenus.forEach(menu => menu.classList.remove('open'));

      // Set active state
      navLinks.forEach(navLink => navLink.classList.remove('active'));
      this.classList.add('active');

      // Show correct page
      pages.forEach(page => page.classList.remove('active'));
      const targetPage = document.getElementById(this.getAttribute('data-page'));
      if (targetPage) targetPage.classList.add('active');

      // Close mobile nav if open
      mobileMenu.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Close dropdown if clicking outside
  document.addEventListener('click', (e) => {
    const isClickInsideDropdown = e.target.closest('.dropdown');
    if (!isClickInsideDropdown) {
      dropdownMenus.forEach(menu => menu.classList.remove('open'));
    }
  });

  // Default active page
  document.querySelector('[data-page="home"]').classList.add('active');
});


// Gallery functionality
const galleryImages = [
  {
    src: "1.jpg",
    description: "Our premium cleaning products in action"
  },
  {
    src: "2.jpg",
    description: "Behind the scenes: production process"
  },
  {
    src: "3.jpg",
    description: "Packaging our eco-friendly cleaning products"
  },
  {
    src: "4.jpg",
    description: "Students presenting BrightBlend Essentials"
  },
  {
    src: "5.jpg",
    description: "Customer testing and feedback session"
  },
  {
    src: "6.jpg",
    description: "Retail display of BrightBlend products"
  },
  {
    src: "7.jpg",
    description: "Group photo of the BrightBlend team"
  },
  {
    src: "8.jpg",
    description: "Community outreach and product awareness"
  }
];


let currentImageIndex = 0;

function updateGalleryImage() {
  const galleryImage = document.getElementById("gallery-image");
  const galleryCounter = document.getElementById("gallery-counter");
  const galleryDescription = document.getElementById("gallery-description");
  const galleryContainer = document.querySelector(".gallery-image-container");

  if (galleryImage && galleryCounter && galleryDescription) {
    const currentImage = galleryImages[currentImageIndex];

    galleryImage.onload = () => {
      galleryContainer.style.height = "auto"; // auto-resize for each image
    };

    galleryImage.src = currentImage.src;
    galleryImage.alt = currentImage.description;
    galleryCounter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
    galleryDescription.textContent = currentImage.description;
  }
}



function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  updateGalleryImage();
}

function previousImage() {
  currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
  updateGalleryImage();
}

document.addEventListener('DOMContentLoaded', updateGalleryImage);


// Keyboard navigation for gallery
document.addEventListener('keydown', function(e) {
  const galleryPage = document.getElementById('gallery');
  if (galleryPage && galleryPage.classList.contains('active')) {
    if (e.key === 'ArrowLeft') {
      previousImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    }
  }
});
// Mission Modal Popup
document.addEventListener('DOMContentLoaded', function() {
  const missionBtn = document.getElementById('mission-btn');
  const missionModal = document.getElementById('mission-modal');
  const missionClose = document.getElementById('mission-close');

  if (missionBtn && missionModal && missionClose) {
    // Open modal when button clicked
    missionBtn.addEventListener('click', () => {
      missionModal.style.display = 'flex';
    });

    // Close modal when "×" is clicked
    missionClose.addEventListener('click', () => {
      missionModal.style.display = 'none';
    });

    // Close modal when clicking outside the content box
    window.addEventListener('click', (event) => {
      if (event.target === missionModal) {
        missionModal.style.display = 'none';
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
  let slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  setInterval(showNextSlide, 3000); // changes every 3 seconds
});
// Order Now Button Function (redirects to Facebook)
function orderProduct(productName) {
  window.open(
    "https://web.facebook.com/people/BrightBlend-Essentials/61565928765158/",
    "_blank"
  );
}




// Auto-play gallery (optional - uncomment to enable)
/*
setInterval(function() {
  const galleryPage = document.getElementById('gallery');
  if (galleryPage && galleryPage.classList.contains('active')) {
    nextImage();
  }
}, 5000); // Change image every 5 seconds
*/
