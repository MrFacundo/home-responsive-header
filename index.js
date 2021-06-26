// Display array of menu items

let scrollerMenuItems = [
  "Overview",
  "Nuts",
  "Dried fruits",
  "Superfoods",
  "Snacks",
  "Breakfast",
  "Cooking",
  "Baking",
  "Supplements",
  "Beverages",
  "Non food",
  "Sale",
  "Food Journal",
];

let menuItems = document.getElementById("menu-scroller");

scrollerMenuItems.forEach((item) => {
  let li = document.createElement("li");
  let a = document.createElement("a");
  li.appendChild(a);

  a.innerText = item;
  menuItems.appendChild(li);
});

// Onclick event handlers. Function set into window variable so it's accessible after Laravel-Mix / Webpack

window.toggleActiveClass = function () {
  document.getElementById("search").classList.toggle("active");
  document.getElementById("toggle").classList.toggle("fa-search");
  document.getElementById("toggle").classList.toggle("fa-times");
};
