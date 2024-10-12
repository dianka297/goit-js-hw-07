const itemEl = document.querySelectorAll(".item");
console.log("Number of categories:", itemEl.length);

const items = Array.from(itemEl);

items.forEach((item) => {
  console.log(item.children[0].textContent);
  console.log(item.firstElementChild.nextElementSibling.children.length);
});