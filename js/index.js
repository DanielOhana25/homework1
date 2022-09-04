let cart = 0;
let size = "";

function bleuCielToCart() {
  let amount = document.getElementById("amountBleuCiel").value;
  let size = document.getElementById("sizeBleuCiel").value;
  cart += 100 * amount;
  console.log(cart);
  size = size;
  console.log(size);
}

function bordeauxToCart() {
  let amount = document.getElementById("amountBordeaux").value;
  let size = document.getElementById("sizeBordeaux").value;
  cart += 100 * amount;
  console.log(cart);
  size = size;
  console.log(size);
}

function grisToCart() {
  let amount = document.getElementById("amountGris").value;
  let size = document.getElementById("sizeGris").value;
  cart += 100 * amount;
  console.log(cart);
  size = size;
  console.log(size);
}

function noirToCart() {
  let amount = document.getElementById("amountNoir").value;
  let size = document.getElementById("sizeNoir").value;
  cart += 100 * amount;
  console.log(cart);
  size = size;
  console.log(size);
}

let totalPrice = 0;
function overallPrice() {
  if (cart > 200) {
    totalPrice = cart - 0.1 * cart;
    alert(totalPrice);
  } else {
    totalPrice = cart;
    alert(totalPrice);
  }
}

function zeroToPay() {
  cart = 0;
}
