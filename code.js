// Local Storage
localStorage.setItem(
  "gothFashion",
  JSON.stringify([
    {
      id: 1,
      productName: "K-Style Black Assassin Set",
      productPrice: "350",
      image: "https://i.ibb.co/RBY9QSG/asassin-outfit.jpg",
    },
    {
      id: 2,
      productName: "Elegant Black Leather Shoes",
      productPrice: "350",
      image: "https://i.ibb.co/HxLR2Zk/elegant-shoes.png",
    },
    {
      id: 3,
      productName: "Black Velvet Dress",
      productPrice: "150",
      image: "https://i.ibb.co/5rn01b9/blackvelvetdress.webp",
    },
    {
      id: 4,
      productName: "Jaggered Sweater",
      productPrice: "190",
      image: "https://i.ibb.co/Hpq4KLj/black-sweater.png",
    },
    {
      id: 5,
      productName: "Dark Lolita Dress",
      productPrice: "150",
      image: "https://i.ibb.co/CW6r619/lolita-dress-black.webp",
    },
  ])
);

let productItemStored = JSON.parse(localStorage.getItem("gothFashion"));

console.log(productItemStored);

Object.keys(productItemStored).forEach((clothes) => {
  let productItemCard = document.querySelector(".productItemCard");
  let productItems = productItemStored[clothes];
  console.log(productItemStored[clothes].productName);
  productItemCard.innerHTML += `
  <div class="productCard  card" style="width: 20%;">
              <img class="img-fluid img-responsive" src="${
                productItems.image
              }"/>
              <div class="card-body">
                      <h3 class="card-title">${productItems.productName}</h3>
                      <p class="card-text productPrice">R${
                        productItems.productPrice
                      }</p>
                      <button class="btn btn-dark" onclick='productToCheckout(${JSON.stringify(
                        productItems
                      )})'>Buy Now !</button>
                  </div>
              </div>
  `;
});

// Sorting & filtering

// Sorting

// Filtering

let productItemString = JSON.parse(localStorage.getItem("gothFashion"));
console.log(productItemString);

// Affordable

let price = productItemString.filter(
  (productItemString) => productItemString.productPrice <= 200
);
console.log(price);

// Expensive

let highPrice = productItemString.filter(
  (productItemString) => productItemString >= 200
);
console.log(highPrice);
