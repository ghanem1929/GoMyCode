// increment
var plusBtn = document.getElementsByClassName("increment");

for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function (event) {
    setQte(event.target);
    updateTotal();
  });
}

var minusBtn = document.getElementsByClassName("decrement");

for (let i = 0; i < minusBtn.length; i++) {
  minusBtn[i].addEventListener("click", function (event) {
    setQte(event.target);
    updateTotal();
  });
}

function setQte(btn) {
  if (btn.className.includes("increment")) {
    let span = btn.previousElementSibling;

    Number(span.innerText++);
  }

  if (btn.className.includes("decrement")) {
    let span = btn.nextElementSibling;
    if (span.innerText > 1) {
      console.log(span);
      Number(span.innerText--);
    }
  }
}

// remove btn
var removeBtn = document.getElementsByClassName("remove");

for (let i = 0; i < removeBtn.length; i++) {
  removeBtn[i].addEventListener("click", function (event) {
    removeItem(event.target);
    updateTotal();
  });
}

function removeItem(btn) {
  var parent = btn.closest(".single-item");
  parent.remove();
  //console.log(parent);
}

//heart btn

var heartBtn = document.getElementsByClassName("like");

for (let i = 0; i < heartBtn.length; i++) {
  heartBtn[i].addEventListener("click", function (event) {
    like(event.target);
  });
}
function like(btn) {
  console.log(btn);
  btn.classList.toggle("text-primary");
}

//total price

var total = document.getElementById("total");

var items = document.getElementsByClassName("single-item");

function updateTotal() {
  total.innerText = 0;
  for (let i = 0; i < items.length; i++) {
    var qte = Number(items[i].querySelector(".quantity span").innerText);
    var priceProduct = Number(items[i].querySelector("h3 span").innerHTML);

    total.innerText = Number(total.innerText) + qte * priceProduct;
    console.log(total);
  }
}
updateTotal();
