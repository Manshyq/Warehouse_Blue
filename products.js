function showProductDetails(detailsId) {
  // Hide all product details
  const allDetails = document.querySelectorAll('.product-details');
  for (const details of allDetails) {
    details.style.display = 'none';
  }

  // Show the selected product's details
  const selectedDetails = document.getElementById(detailsId);
  if (selectedDetails) {
    selectedDetails.style.display = 'block';
  } else {
    console.error("Details container not found for ID:", detailsId);
  }
}




//SEARCH BAR

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        searchResults.innerHTML = ''; // Clear previous results

        if (searchTerm.length > 0) {
            // Filter products by name
            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));

            // Display matching products
            filteredProducts.forEach(product => {
                const div = document.createElement('div');
                div.classList.add('result-item');
                div.innerHTML = `<img src="${product.image}" alt="${product.name}" style="width:50px; height:50px; margin-right:10px;"><span>${product.name}</span>`;
                div.onclick = function() {
                    showProductDetails(product.id);
                };
                searchResults.appendChild(div);
            });
        }
    });
});

// Dummy products array for example purposes
const products = [
    { id: 'soya-milk-details', name: 'Soya Milk', image: 'pictures/soya-milk.jpeg' },
    { id: 'chocolate-muffin-details', name: 'Chocolate Muffin', image: 'pictures/chocolate-muffin.jpeg' },
    { id: 'paper-cups-details', name: 'Paper cups', image: 'pictures/paper-cups.jpeg'},
    { id: 'lemonade-details', name: 'Lemonade', image: 'pictures/lemonade.jpeg'}
    // Add more products here
];

