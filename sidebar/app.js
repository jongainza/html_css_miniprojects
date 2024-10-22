const getElement = (selector) => {
  const el = document.querySelector(selector);
  if (el) return el;
  throw new Error(`please check your classes : ${selector} does not exist`);
};

const sidebarToggle = getElement(".sidebar-toggle");
const sidebar = getElement(".sidebar");
const closeBtn = getElement(".close-btn");

sidebarToggle.addEventListener("click", function () {
  sidebar.classList.toggle("sidebar-show");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("sidebar-show");
});
