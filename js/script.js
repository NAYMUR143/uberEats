window.onscroll = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("header").style.backgroundColor = "white";
  } else {
    document.querySelector("header").style.backgroundColor = "";
  }
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    document
      .getElementById("searchbar")
      .setAttribute(
        "style",
        "clipPath:polygon(0 0, 100% 0, 100% 100%, 0% 100%);transition:.5s"
      );

    document.getElementById("searchbar").style.clipPath =
      "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
  } else {
    document
      .getElementById("searchbar")
      .setAttribute(
        "style",
        "clipPath:polygon(0 0, 0 0, 0 100%, 0 100%);transition:.05s"
      );

    // document.getElementById("searchbar").style.clipPath =
    //   "polygon(0 0, 0 0, 0 100%, 0 100%)";
  }
};

const humburger = document.querySelector(".humbrgrsc");
const asidenav = document.querySelector(".asideNav");
const overlay = document.querySelector(".overlay");
const nav = document.getElementById("nav");
const navStyle = () => {
  nav.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
};
const closeAside = () => {
  asidenav.style.display = "none";
};
humburger.addEventListener("click", () => {
  asidenav.style.display = "block";
  setTimeout(navStyle, 300);
});
overlay.addEventListener("click", () => {
  nav.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0 100%)";
  setTimeout(closeAside, 300);
});
