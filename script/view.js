const productsPerPage = 8;
let currentPage = 1; 
let productsData = {}; 

function displayProducts(page) {
  const productList = document.getElementById('productList');
  productList.innerHTML = ''; 

  const start = (page - 1) * productsPerPage;
  const end = start + productsPerPage;
  const displayProducts = Object.values(productsData).slice(start, end);

  displayProducts.forEach(product => {
    const productContainer = document.createElement('div');
    productContainer.classList.add('product');

    const productImage = document.createElement('img');
    productImage.src = product.productImage;
    productImage.alt = product.productName;

    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details');

    const productName = document.createElement('div');
    productName.classList.add('product-name');
    productName.textContent = product.productName;

    const productBrand = document.createElement('div');
    productBrand.classList.add('product-brand');
    productBrand.textContent = product.productBrand;

    const productPrice = document.createElement('div');
    productPrice.classList.add('product-price');
    productPrice.textContent = `₱${product.productPrice}`;

    const productDescription = document.createElement('div');
    productDescription.classList.add('product-description');
    productDescription.textContent = product.productDescription;

    productDetails.appendChild(productName);
    productDetails.appendChild(productBrand);
    productDetails.appendChild(productPrice);
    productDetails.appendChild(productDescription);

    productContainer.appendChild(productImage);
    productContainer.appendChild(productDetails);

    productList.appendChild(productContainer);
  });

  updatePageIndicator(page);
}

function updatePageIndicator(page) {
  const totalPages = Math.ceil(Object.keys(productsData).length / productsPerPage);
  const pageIndicator = document.getElementById('pageIndicator');
  pageIndicator.textContent = `Page ${page} of ${totalPages}`;
}

function nextPage() {
  const totalPages = Math.ceil(Object.keys(productsData).length / productsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayProducts(currentPage);
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    displayProducts(currentPage);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const databaseURL = 'https://rubiks-tech-default-rtdb.firebaseio.com/';
  const endpoint = `${databaseURL}/Products.json`;

  fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      productsData = data; // Store fetched product data
      displayProducts(currentPage);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});
