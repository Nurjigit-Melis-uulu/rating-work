let burger = document.querySelector("#burger");
let navUl = document.querySelector("nav ul");
let aside = document.querySelector('aside');
const articles = document.querySelectorAll(".articles article");
const links = document.querySelectorAll("nav a");
let open = false;

burger.addEventListener("click", function() {
  console.log(open);
  open = !open;
  open ? (navUl.className = "active") : (navUl.className = "");
});

document.addEventListener("scroll", function() {
  open = false;
  navUl.className = "";
});

links.forEach(link => {
  link.addEventListener("click", function(event) {
    let href = event.target.href.split("#")[1];
    document.move(document.getElementById(href));
    event.preventDefault();
  });
});
