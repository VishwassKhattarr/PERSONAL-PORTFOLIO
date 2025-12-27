const headings = document.querySelectorAll("section h2");

headings.forEach(h => {
  h.addEventListener("mouseenter", () => {
    h.style.letterSpacing = "1px";
  });

  h.addEventListener("mouseleave", () => {
    h.style.letterSpacing = "0px";
  });
});


const buttons = document.querySelectorAll("button, .btn");

buttons.forEach(btn => {
  btn.addEventListener("mousedown", () => {
    btn.style.transform = "translateY(1px)";
  });

  btn.addEventListener("mouseup", () => {
    btn.style.transform = "translateY(-2px)";
  });
});

const sections = document.querySelectorAll(".section");

sections.forEach(sec => {
  sec.style.opacity = "0";
  sec.style.transform = "translateY(20px)";

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        sec.style.opacity = "1";
        sec.style.transform = "translateY(0)";
        sec.style.transition = "all 0.5s ease";
      }
    });
  });

  observer.observe(sec);
});


const track = document.querySelector(".explore-track");

if (track) {
  track.addEventListener("wheel", (e) => {
    e.preventDefault();
    track.scrollLeft += e.deltaY;
  });
}


const divider = document.querySelector(".section-divider");

if (divider) {
  divider.addEventListener("mouseenter", () => {
    divider.style.opacity = "1";
  });
  divider.addEventListener("mouseleave", () => {
    divider.style.opacity = "0.6";
  });
}

document.querySelectorAll(".project-card").forEach(card => {
  const liveBtn = card.querySelector(".live-btn");
  const codeBtn = card.querySelector(".code-btn");

  const liveLink = card.dataset.live;
  const codeLink = codeBtn?.getAttribute("href");

  // View Live logic
  liveBtn.addEventListener("click", () => {
    if (!liveLink || liveLink === "none") {
      alert("This project hasn’t been deployed yet.");
    } else {
      window.open(liveLink, "_blank", "noopener");
    }
  });

  // View Code logic
  if (codeBtn) {
    codeBtn.addEventListener("click", (e) => {
      if (!codeLink || codeLink.trim() === "") {
        e.preventDefault();
        alert("Code not available at the moment.");
      }
    });
  }
});


