let items = [];

const prodContainer = document.getElementById("products");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    items = data;
    console.log(data);
    showItems(data);
  });

function showItems(products) {
  prodContainer.innerHTML = "";
  products.forEach((product) => {
    prodContainer.innerHTML += `


    <div class="col-md-12 d-flex justify-content-center m-3">
        <div id="Products" class='w-75'>
        <img class='w-50 justify-content-center' src="${product.image}" />
        <h2>${product.title}</h2>
        <h4>${product.description}</h4>
        <p>Price: R${product.price}</p>
        <p>Rating: ${product.rating.rate}/5</p>
        </div>
    </div>

    `;
  });
}

function addItems() {
  const newProducts = {
    title: document.querySelector("#title").value,
    category: document.querySelector("#category").value,
    image: document.querySelector("#image").value,
    price: document.querySelector("#price").value,
    rating: document.querySelector("#rating").value,
    description: document.querySelector("#description").value,
  };
  items.push(newProducts);
  showItems(items);
  console.log(items);
}

const filterCategory = (e) => {
  const category = e.target.value;

  if (category === "all") {
    return showItems(items);
  }

  const filtered = items.filter((item) => item.category === category);
  return showItems(filtered);
};
