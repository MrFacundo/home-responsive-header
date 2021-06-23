let data = [
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

data.forEach((item) => {
	let li = document.createElement("li");
	let a = document.createElement("a");
	li.appendChild(a);

	a.innerText = item;
	menuItems.appendChild(li);
});

function toggleActiveClass() {
	document.getElementById("search").classList.toggle("active");
	document.getElementById("toggle").classList.toggle("fa-search");
	document.getElementById("toggle").classList.toggle("fa-times");
}
