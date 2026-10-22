(function () {
  const yearEl = document.getElementById("year");
  const themeToggle = document.getElementById("theme-toggle");
  const searchInput = document.getElementById("project-search");
  const technologyFilter = document.getElementById("technology-filter");
  const projectCards = document.querySelectorAll(".project-card");
  const projectCount = document.getElementById("project-count");
  const noProjects = document.getElementById("no-projects");

  // Display the current year
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Light and dark mode
  function applyTheme(isDark) {
    document.body.classList.toggle("dark", isDark);

    if (themeToggle) {
      themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
      themeToggle.setAttribute("aria-pressed", String(isDark));
    }

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  const storedTheme = localStorage.getItem("theme");
  applyTheme(storedTheme === "dark");

  const profileImage = document.getElementById("profile-image");
  if (profileImage) {
    function hideBrokenPhoto() {
      if (!profileImage.complete || profileImage.naturalWidth === 0) {
        profileImage.hidden = true;
      }
    }

    profileImage.addEventListener("error", function () {
      profileImage.hidden = true;
    });
    profileImage.addEventListener("load", function () {
      profileImage.hidden = false;
    });

    hideBrokenPhoto();
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      applyTheme(!document.body.classList.contains("dark"));
    });
  }

  // Search and technology filter
  function filterProjects() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const selectedTech = technologyFilter
      ? technologyFilter.value.toLowerCase()
      : "all";

    let visibleCount = 0;

    projectCards.forEach(function (card) {
      const title = card.dataset.title || "";
      const tech = card.dataset.tech || "";
      const content = card.textContent || "";

      const matchesSearch =
        (title + " " + tech + " " + content)
          .toLowerCase()
          .includes(query);

      const technologies = tech.toLowerCase().split(/\s+/);

      const matchesTech =
        selectedTech === "all" || technologies.includes(selectedTech);

      const visible = matchesSearch && matchesTech;
      card.hidden = !visible;

      if (visible) {
        visibleCount++;
      }
    });

    if (projectCount) {
      projectCount.textContent = visibleCount + " project(s) found";
    }

    if (noProjects) {
      noProjects.hidden = visibleCount !== 0;
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", filterProjects);
  }

  if (technologyFilter) {
    technologyFilter.addEventListener("change", filterProjects);
  }

  filterProjects();

})();

const projectSearch = document.getElementById("project-search");
const projectResults = document.getElementById("project-results");
const themeToggle = document.getElementById("theme-toggle");
const projectCards = document.querySelectorAll(".project-card");

// Search projects by name or technology
function filterProjects() {
  const searchTerm = projectSearch.value.trim().toLowerCase();
  let visibleCount = 0;

  projectCards.forEach((card) => {
    const projectText = card.textContent.toLowerCase();
    const projectTitle = (card.dataset.title || "").toLowerCase();
    const projectTech = (card.dataset.tech || "").toLowerCase();

    const matches =
      projectText.includes(searchTerm) ||
      projectTitle.includes(searchTerm) ||
      projectTech.includes(searchTerm);

    card.hidden = !matches;

    if (matches) {
      visibleCount++;
    }
  });

  projectResults.textContent =
    `${visibleCount} project${visibleCount === 1 ? "" : "s"} found`;
}

if (projectSearch && projectResults) {
  projectSearch.addEventListener("input", filterProjects);
  filterProjects();
}

// Light and dark mode toggle
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const darkModeEnabled = document.body.classList.toggle("dark-mode");

    themeToggle.textContent = darkModeEnabled
      ? "Switch to Light Mode"
      : "Switch to Dark Mode";
  });
}
