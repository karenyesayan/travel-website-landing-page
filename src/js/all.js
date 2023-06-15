document.addEventListener('DOMContentLoaded', () => {
  const dropDown = document.querySelector(".drop-down");
  const dropDownLinks = document.querySelectorAll(".drop-down__link");
  const dropDownTitle = document.querySelector(".drop-down__title");

  dropDown.addEventListener("click", function (e) {
    e.stopPropagation();
    this.classList.toggle("drop-down--active");
  });

  dropDownLinks.forEach((element) => {
    element.addEventListener("click", function (e) {
      [dropDownTitle.innerHTML, e.currentTarget.textContent] = [e.currentTarget.textContent, dropDownTitle.innerHTML];
    });
  });

  document.addEventListener("click", function () {
    dropDown.classList.contains("drop-down--active") && dropDown.classList.toggle("drop-down--active");
  });
})
