// To send product data to checkout page

let productItemString = JSON.parse(localStorage.getItem("gothFashion"));
console.log(productItemString);

Object.keys(productItemString).forEach((cartItems, index) => {
  console.log(productItemString[cartItems]);
  let item = productItemString[cartItems];
  let tableBody = document.querySelector("tbody");
  tableBody.innerHTML += `
    <tr>
      <td id="productName" class="my-td">${item.productName}</td>
      <td id="quantity" class="my-td"></td>
      <td id="price" class="my-td">R${item.productPrice}</td>
      <td id="adminButtons" class="my-td">
        <a class="btn btn-warning btn-sm remBtn" onclick="del(${index})"
          >Remove</a>
      </td>
    </tr>
  `;
});
