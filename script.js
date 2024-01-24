const events = ["click", "touchstart"];

function initTabNav() {
  const grainTabs = document.querySelectorAll("[data-tab='tab']");
  const grainContents = document.querySelectorAll(".grain-info section");

  if (grainTabs.length && grainContents.length) {
    function activeTabContent(item, index) {
      grainTabs.forEach((tab) => {
        tab.classList.remove("active");
      })
      grainContents.forEach((section) => {
        section.classList.remove("active");
      })
      grainContents[index].classList.add("active");
      item.classList.add("active");
    }

    grainTabs.forEach((item, index) => {
      events.forEach((userEvent) => {
        item.addEventListener(userEvent, () => {
          activeTabContent(item, index);
        });
      })
    })
  }
}

function initMenuMobile() {
  const headerMenu = document.querySelector(".header-menu");
  const btnMobile = document.getElementById("btn-mobile");
  const btnMobileBefore = document.querySelector("#btn-mobile");
  const links = document.querySelectorAll(".header-menu li a");

  function toggleMenu(event) {
    if (event.type === "touchstart") {
      event.preventDefault();
    }
    headerMenu.classList.toggle("active");
    btnMobileBefore.classList.toggle("active");
  }

  function closeMenuMobile() {
    if (headerMenu.classList.contains("active")) {
      headerMenu.classList.remove("active");
      btnMobileBefore.classList.remove("active");
    }
  }

  events.forEach((userEvent) => {
    btnMobile.addEventListener(userEvent, toggleMenu);
  })
  links.forEach((link) => {
    link.addEventListener("click", closeMenuMobile);
  })
}

initTabNav();
initMenuMobile();