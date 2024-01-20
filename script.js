const events = ["click", "touchstart"];
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