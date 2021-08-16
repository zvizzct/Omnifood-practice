let buttonNav = document.querySelector(".icon-mobile-navigation");
const navOpenHeader = document.querySelector(".header");

buttonNav.addEventListener("click", function () {
  console.log(buttonNav.getAttribute("name"));
  const myArr = buttonNav.getAttribute("name").split("-");
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] == "menu") {
      navOpenHeader.classList.add("nav-open");
      buttonNav = document.querySelector(".ionicon");
      console.log(buttonNav);

      console.log("lol");
    } else if (myArr[i] == "close") {
      navOpenHeader.classList.remove("nav-open");
      console.log("xd");
    }
  }
  console.log(buttonNav);
});
