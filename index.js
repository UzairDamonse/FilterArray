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
        <div id="Products" class='w-50'>
        <div class='d-flex justify-content-center'>
        <img class='w-50 ' src="${product.image}" />
        </div>
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

  const categoryFiltered = items.filter((item) => item.category === category);
  return showItems(categoryFiltered);
};

const filterPrice = (e) => {
  const Price = e.target.value;

  const priceFiltered = items.sort((a, b) => a.price - b.price);

  if (Price === "priceAcsending") {
    showItems(priceFiltered);
  } else if (Price === "priceDescsending") {
    showItems(priceFiltered.reverse());
  } else {
    return showItems(items);
  }
};

const filterRating = (e) => {
  const Rating = e.target.value;

  if (Rating === "none") {
    return showItems(items);
  }
  const ratingFiltered = items.filter(
    (item) => item.rating.rate >= parseInt(Rating)
  );
  return showItems(ratingFiltered);
};

const filterTitle = (e) => {
  const Title = e.target.value;
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(Title.toLowerCase())
  );
  return showItems(filteredItems);
};

const filterDescription = (e) => {
  const Description = e.target.value;
  const filteredDescription = items.filter((item) =>
    item.description.toLowerCase().includes(Description.toLowerCase())
  );
  return showItems(filteredDescription);
};
