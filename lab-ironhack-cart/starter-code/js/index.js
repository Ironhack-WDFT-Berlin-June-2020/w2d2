var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");
let $create = document.querySelector("#create");

$calc.onclick = calcAll;
$create.onclick = createNewProduct;

function updateSubtot(product) {
  // Iteration 1.1
  let price = product.querySelector(".pu > span").innerHTML;
  let quantity = product.querySelector(".qty > label > input").value;
  let subtotal = product.querySelector(".subtot > span");

  subtotal.innerHTML = (price * quantity);

  return price * quantity;
}

function calcAll() {
  // Iteration 1.2
  let totalPrice = 0;
  document.querySelectorAll(".product").forEach(ele => {
    totalPrice += updateSubtot(ele);
  });

  document.querySelector("body > h2 > span").innerHTML = totalPrice.toString();
}


function addDeleteOnClick(element) {
  element.querySelector(".rm > button").onclick = deleteProduct;
}

function deleteProduct(event) {
  document.querySelector("#cart > tbody").removeChild(event.currentTarget.parentNode.parentNode);
}

document.querySelectorAll("#cart > tbody > tr").forEach(element => {
  addDeleteOnClick(element);
});

let oldEle = document.querySelector("#cart > tbody > tr:nth-child(1)");
const newTrElement = oldEle.cloneNode(true); // These two lines just copies the format of the shopping cart, so i don't have to remake it

function createNewProduct() {
  let createDiv = document.querySelector("#cart > tfoot > tr"); // This is the "create new product div"
  let name = createDiv.querySelector("td:nth-child(1) > input").value; // This is the name input for the new product
  let priceUnit = createDiv.querySelector("td:nth-child(2) > input").value; // This is the price per unit input for the new product
  // let newTrElement = newEle.cloneNode(true); // this create a copy of the <tr> product element

  newTrElement.querySelector("td.name > span").innerHTML = name; // sets the name of the new product
  newTrElement.querySelector("td.pu > span").innerHTML = priceUnit; // sets the price per unit of the new product
  addDeleteOnClick(newTrElement); // adds the onclick for the delete button (if i want to remove the product again)

  document.querySelector("#cart > tbody").appendChild(newTrElement); // adds the element to the carts tbody
}
