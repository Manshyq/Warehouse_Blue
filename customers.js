function showProductDetails(detailsId) {
  // Hide all product details
  const allDetails = document.querySelectorAll('.customer-details');
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
    { id: 'customer1-details', name: 'Jack Jones', image: 'pictures/jack-jones.jpeg' },
    { id: 'customer2-details', name: 'Aliya Nazarova', image: 'pictures/aliya.jpeg' },
    { id: 'customer3-details', name: 'Kim Lee', image: 'pictures/girl.jpeg' },
    { id: 'customer4-details', name: 'Aibek Kim', image: 'pictures/kim.png' },
    { id: 'customer5-details', name: 'Aigerim Ali', image: 'pictures/aigerim.png' },
    { id: 'customer6-details', name: 'Rustam Bolatovich', image: 'pictures/rustam.png' },
    { id: 'customer7-details', name: 'Jennifer Aniston', image: 'pictures/jennifer.png' },

    // Add more products here
];

