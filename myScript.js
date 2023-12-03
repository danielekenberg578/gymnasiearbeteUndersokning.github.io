
const products = [
    { id: 1, name: 'Apple Keyboard', image: 'bilder/appleKeyboard.jpg' },
    { id: 2, name: 'Sony WH-1000XM4', image: 'bilder/sonyHeadphones.webp' },
    { id: 3, name: 'Apple Airpods', image: 'bilder/appleAirpods.jpg' },
    { id: 4, name: 'JBL Flip 6', image: 'bilder/jblFlip6.jpg' },
    { id: 5, name: "Philips Airfryer 3000", image: "bilder/philipsAirfryer3000.png"},
    { id: 6, name: "Philips OLED", image: "bilder/philipsOLED.png"},
];


function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <p>${product.name}</p>
    `;
    return productElement;
}


function loadNewProducts() {
    const productContainer = document.getElementById('productContainer');
    const loadingIndicator = document.getElementById('loadingIndicator');

   
    setTimeout(() => {
        
        const newProducts = getNewProducts(); 
        newProducts.forEach(product => {
            const productElement = createProductElement(product);
            productContainer.appendChild(productElement);
        });

       
        loadingIndicator.style.display = 'none';
    }, 1000); 
}


function isAtBottom() {
    const productContainer = document.getElementById('productContainer');
    return window.innerHeight + window.scrollY >= productContainer.offsetHeight;
}


function handleScroll() {
    if (isAtBottom()) {
        const loadingIndicator = document.getElementById('loadingIndicator');
        loadingIndicator.style.display = 'block';
        loadNewProducts();
    }
}


window.addEventListener('scroll', handleScroll);


document.addEventListener('DOMContentLoaded', loadNewProducts);


function getNewProducts() {
 
    const shuffledProducts = [...products];
    for (let i = shuffledProducts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledProducts[i], shuffledProducts[j]] = [shuffledProducts[j], shuffledProducts[i]];
    }
    return shuffledProducts;
}
