// --- Data for Villages ---
const villageData = {
  hanle: {
    name: "Hanle",
    desc: "Home to the 17th-century Hanle Monastery and the Indian Astronomical Observatory. Hanle is the crown jewel of India's first Dark Sky Reserve, offering skies so dark they cast shadows by starlight.",
    sqm: "21.89",
    bortle: "Class 1",
    img: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=800",
  },
  merak: {
    name: "Merak",
    desc: "Located on the banks of Pangong Tso, Merak offers a unique blend of lakeside reflection and celestial brilliance. The high moisture content is low enough in winter to provide crystal clear views.",
    sqm: "21.75",
    bortle: "Class 1-2",
    img: "https://images.unsplash.com/photo-1504608524841-42fe564d9761?auto=format&fit=crop&q=80&w=800",
  },
  maan: {
    name: "Maan",
    desc: "A pioneering village in Astro-tourism. The local community has been trained as Astro-guides, offering an authentic cultural experience alongside telescopic sessions.",
    sqm: "21.60",
    bortle: "Class 2",
    img: "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?auto=format&fit=crop&q=80&w=800",
  },
};

// --- Data for Science ---
const scienceData = {
  altitude: {
    title: '4500<span class="text-lg align-top">m</span>',
    subtitle: "Elevation",
    img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1000&auto=format&fit=crop",
  },
  observatory: {
    title: "IAO",
    subtitle: "Indian Astronomical Observatory",
    img: "https://images.unsplash.com/photo-1582234057999-923f06e05391?auto=format&fit=crop&q=80&w=1000",
  },
  bortle: {
    title: "Class 1",
    subtitle: "Darkness Scale",
    img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=1000",
  },
};

// --- Functions ---

// 1. Science Section Interactive
function updateScience(id) {
  const data = scienceData[id];
  if (!data) return;

  // Fade out
  const content = document.getElementById("s-content-wrapper");
  const bg = document.getElementById("s-bg");
  content.style.opacity = "0";
  bg.style.opacity = "0";

  setTimeout(() => {
    // Update
    document.getElementById("s-title").innerHTML = data.title;
    document.getElementById("s-subtitle").textContent = data.subtitle;
    bg.style.backgroundImage = `url('${data.img}')`;

    // Fade in
    content.style.opacity = "1";
    bg.style.opacity = "0.3";
  }, 300);

  // Update Active State
  const buttons = document.querySelectorAll(".science-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("border-skarma-gold", "active");
    btn.classList.add("border-transparent");
    if (btn.onclick.toString().includes(id)) {
      btn.classList.remove("border-transparent");
      btn.classList.add("border-skarma-gold", "active");
    }
  });
}

// 2. Interactive Map/Village Switcher
function updateVillage(id) {
  const data = villageData[id];
  if (!data) return;

  // Update Content with fade effect
  const contentDiv = document.getElementById("village-content");
  contentDiv.style.opacity = "0";

  setTimeout(() => {
    document.getElementById("v-name").textContent = data.name;
    document.getElementById("v-desc").textContent = data.desc;
    document.getElementById(
      "v-sqm"
    ).innerHTML = `${data.sqm} <span class="text-sm text-gray-500">mag/arcsec²</span>`;
    document.getElementById("v-bortle").textContent = data.bortle;
    document.getElementById("v-image").src = data.img;
    contentDiv.style.opacity = "1";
  }, 300);

  // Update Buttons styling
  const buttons = document.querySelectorAll(".village-btn");
  buttons.forEach((btn) => {
    btn.classList.remove("border-skarma-gold", "active");
    btn.classList.add("border-transparent");
    if (btn.onclick.toString().includes(id)) {
      btn.classList.remove("border-transparent");
      btn.classList.add("border-skarma-gold", "active");
    }
  });
}

// 3. Gallery Filter
function filterGallery(category) {
  const items = document.querySelectorAll(".gallery-item");
  const filters = document.querySelectorAll(".gallery-filter");

  // Style active filter
  filters.forEach((f) => {
    f.classList.remove("text-skarma-gold", "border-b", "border-skarma-gold");
    f.classList.add("text-gray-500");
    if (
      f.textContent
        .toLowerCase()
        .includes(category === "all" ? "all" : category)
    ) {
      f.classList.remove("text-gray-500");
      f.classList.add("text-skarma-gold", "border-b", "border-skarma-gold");
    }
  });

  items.forEach((item) => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
      setTimeout(() => (item.style.opacity = "1"), 50);
    } else {
      item.style.opacity = "0";
      setTimeout(() => (item.style.display = "none"), 300);
    }
  });
}

// 4. Scroll Animation (Intersection Observer)
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

// 5. Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.classList.add("bg-skarma-dark/90", "backdrop-blur-md", "shadow-lg");
    nav.classList.remove("py-4");
    nav.classList.add("py-2");
  } else {
    nav.classList.remove("bg-skarma-dark/90", "backdrop-blur-md", "shadow-lg");
    nav.classList.remove("py-2");
    nav.classList.add("py-4");
  }
});

// 6. Mobile Menu Toggle
const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-menu-btn");
const menuLinks = menu.querySelectorAll("a");

btn.addEventListener("click", () => {
  menu.classList.remove("translate-x-full");
});

const closeMenu = () => {
  menu.classList.add("translate-x-full");
};

closeBtn.addEventListener("click", closeMenu);
menuLinks.forEach((link) => link.addEventListener("click", closeMenu));

// 7. Form Handling (Mock)
function handleContact(e) {
  e.preventDefault();
  // In a real PHP scenario, this would post to a script
  const btn = e.target.querySelector("button");
  const originalText = btn.textContent;

  btn.textContent = "Message Sent!";
  btn.classList.remove("bg-skarma-gold", "text-skarma-dark");
  btn.classList.add("bg-green-600", "text-white");

  setTimeout(() => {
    btn.textContent = originalText;
    btn.classList.add("bg-skarma-gold", "text-skarma-dark");
    btn.classList.remove("bg-green-600", "text-white");
    e.target.reset();
  }, 3000);
}
