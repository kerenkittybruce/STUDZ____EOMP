// To send product data to admin page

let productItemString = JSON.parse(localStorage.getItem("gothFashion"));
console.log(productItemString);

Object.keys(productItemString).forEach((adminItems, index) => {
  console.log(productItemString[adminItems]);
  let item = productItemString[adminItems];
  let tableBody = document.querySelector("tbody");
  tableBody.innerHTML += `
    <tr>
      <td id="productName" class="my-td">${item.productName}</td>
      <td id="quantity displayThis" class="my-td">
      <a id="minus" class="btn btn-warning btn-sm" onclick="minusThis()">-</a>
      <span class="text-center fw-bold" id="displayThis">0</span>
      <a id="plus" class="btn btn-warning btn-sm remBtn" onclick="calculate()"
      >+</a>
      </td>
      <td id="price" class="my-td">R${item.productPrice}</td>
      <td id="adminButtons" class="my-td">
        <a class="btn btn-warning btn-sm" onclick="addItem()">Edit</a>
        <a class="btn btn-warning btn-sm remBtn" onclick="del(${index})"
          >Remove</a>
      </td>
    </tr>
  `;
});

// Quantity select

let minus = document.getElementById("minus");
let displayThis = document.getElementById("displayThis");
let plus = document.getElementById("plus");

//

plus.addEventListener("click", calculate);
function calculate() {
  let displayThis = document.getElementById("displayThis").innerHTML;
  displayThis++;
  document.getElementById("displayThis").innerHTML = displayThis++;
}

//

minus.addEventListener("click", minusThis);
function minusThis() {
  let displayThis = document.getElementById("displayThis").innerHTML;
  displayThis--;
  document.getElementById("displayThis").innerHTML = displayThis--;
}

//

for (i = 0; i < productItemString; i++) {}

// CRUD

// Add Item button

function addItem() {
  const itemInput = document.querySelector("#itemSelected");
  const qtyInput = document.querySelector("#quantitySelected");
  const addBtn = document.querySelector("addBtn");
  const listOfCheckout = document.querySelector("listOfCheckout");
  addBtn.addEventListener("click", (e) => {
    if (itemInput.value != "") {
      e.preventDefault();
      // to add
      const itemAdded = document.createElement("td");
      itemAdded.innerHTML = itemInput.value;
      listOfCheckout.appendChild(itemAdded);
    }
  });
}

// Edit

// Delete button - to delete data from list

function del() {
  if (
    confirm(
      " 💜Do you really want to remove this item ?💜\n 💜Really ?💜\n 💜Like, actually ?💜\n  ✨🥺✨"
    )
  ) {
    const storageItems = JSON.parse(localStorage.getItem("productItemString"));
    let tableRow = rowIndex - 1;
    if (tableRow) {
      tableRow && storageItems.splice(tableRow, 1);
      localStorage.setItem("productItemString", JSON.stringify(storageItems));
      window.location.reload();
      console.log(storageItems);
    } else {
      return;
    }
  } else {
    return false;
  }
}
