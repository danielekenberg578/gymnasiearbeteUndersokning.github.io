// Sample array of products
const products = [
    { id: 1, name: 'Apple Keyboard', image: 'bilder/appleKeyboard.jpg' },
    { id: 2, name: 'Sony WH-1000XM4', image: 'bilder/sonyHeadphones.webp' },
    { id: 3, name: 'Apple Airpods', image: 'bilder/appleAirpods.jpg' },
    { id: 4, name: 'JBL Flip 6', image: 'bilder/jblFlip6.jpg' },
    { id: 5, name: "Philips Airfryer 3000", image: "bilder/philipsAirfryer3000.png"},
    { id: 6, name: "Philips OLED", image: "bilder/philipsOLED.png"},
];

// Function to create a product element
function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <p>${product.name}</p>
    `;
    return productElement;
}

// Function to load new products
function loadNewProducts() {
    const productContainer = document.getElementById('productContainer');
    const loadingIndicator = document.getElementById('loadingIndicator');

    // Simulate loading delay (you can replace this with actual AJAX/fetch calls)
    setTimeout(() => {
        // Add new products to the container
        const newProducts = getNewProducts(); // Replace with your logic to get new products
        newProducts.forEach(product => {
            const productElement = createProductElement(product);
            productContainer.appendChild(productElement);
        });

        // Remove the loading indicator
        loadingIndicator.style.display = 'none';
    }, 1000); // Simulated delay of 1 second
}

// Function to check if the user has scrolled to the bottom
function isAtBottom() {
    const productContainer = document.getElementById('productContainer');
    return window.innerHeight + window.scrollY >= productContainer.offsetHeight;
}

// Function to handle the scroll event
function handleScroll() {
    if (isAtBottom()) {
        const loadingIndicator = document.getElementById('loadingIndicator');
        loadingIndicator.style.display = 'block';
        loadNewProducts();
    }
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial load of products
document.addEventListener('DOMContentLoaded', loadNewProducts);

// Sample function to get new products (replace with your logic)
function getNewProducts() {
    // Simulated logic: Shuffle the existing products
    const shuffledProducts = [...products];
    for (let i = shuffledProducts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledProducts[i], shuffledProducts[j]] = [shuffledProducts[j], shuffledProducts[i]];
    }
    return shuffledProducts;
}
