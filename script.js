// Define the API URL for products
const apiUrl = 'https://api.noroff.dev/api/v1/rainy-days/';

// Function to fetch and insert products into the page
function fetchAndInsertProducts() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const products = data;
      const productContainer = document.getElementById('product-list');

      products.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const productLink = document.createElement('a');
        productLink.href = 'productspecific.html';

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.title;

        productLink.appendChild(productImage);
        productDiv.appendChild(productLink);
        productContainer.appendChild(productDiv);
      });
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });
}

// Call the function to fetch and insert products
fetchAndInsertProducts();
