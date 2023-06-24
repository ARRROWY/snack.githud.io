// Sample product data
// Sample product data
const products = [
    { 
      name: 'Lays',
      category: 'chips',
      image: 'images/Lays.png',
      characteristics: ['Capacity: 180g']
    },
    { 
        name: 'Pringles',
        category: 'chips',
        image: 'images/Pringles.png',
        characteristics: ['Capacity: 200']
      },
      { 
        name: 'Fanta',
        category: 'sugardrinks',
        image: 'images/Fanta.jpeg',
        characteristics: ['Capacity: 250ml']
      },
      { 
        name: 'ChupaChups coke',
        category: 'sugardrinks',
        image: 'images/Cho.jpeg',
        characteristics: ['Capacity: 250ml']
      },
    { 
      name: 'Coke',
      category: 'sugardrinks',
      image: 'images/coke.jpeg',
      characteristics: ['Capacity: 500ml']
    },
    { 
      name: 'Orbit',
      category: 'gum',
      image: 'images/Orbit.webp',
      characteristics: ['inside 10 pieces']
    },
    
    { 
      name: 'Huba Bubba',
      category: 'gum',
      image: 'images/hub.webp',
      characteristics: ['inside 10 pieces']
    },
    { 
        name: 'Big League Chew',
        category: 'gum',
        image: 'images/big.webp',
        characteristics: ['Power: 1200W', 'Capacity: 1.5L']
      },
    { 
      name: 'Orvile',
      category: 'popcorn',
      image: 'images/popcorn.jpeg',
      characteristics: ['Capacity: 500g']
    },
    { 
        name: 'Anniees',
        category: 'nuts',
        image: 'images/ann.webp',
        characteristics: ['Capacity: 250g']
      },
      
      { 
        name: 'Harvest',
        category: 'nuts',
        image: 'images/yfr.webp',
        characteristics: ['Capacity: 250g']
      },
      { 
        name: 'Skinny Dipped',
        category: 'nuts',
        image: 'images/dip.webp',
        characteristics: ['Capacity: 250 g']
      },
      { 
        name: 'Second Nature',
        category: 'nuts',
        image: 'images/nature.webp',
        characteristics: ['Capacity: 150 g']
      },
      { 
        name: 'Planters',
        category: 'nuts',
        image: 'images/honey.webp',
        characteristics: ['Capacity: 250 g']
      },
      { 
        name: 'Ritter',
        category: 'chocolade',
        image: 'images/rit.webp',
        characteristics: ['Capacity: 250 g']
      },
      { 
        name: 'Mallo cup',
        category: 'chocolade',
        image: 'images/Mallo.webp',
        characteristics: ['Capacity: 250 g']
      },
      { 
        name: 'M&Ms',
        category: 'chocolade',
        image: 'images/mandm.webp',
        characteristics: ['Capacity: 150 g']
      },
      { 
        name: 'HERSHEYS',
        category: 'chocolade',
        image: 'images/HERSHEYS.png',
        characteristics: ['Capacity: 150 g']
      },
      { 
        name: 'Belvita',
        category: 'cookie',
        image: 'images/belvita.webp',
        characteristics: ['Capacity: 250 g']
      },
      { 
        name: 'Grandmas',
        category: 'cookie',
        image: 'images/grand.webp',
        characteristics: ['Capacity: 300 g']
      },
      { 
        name: 'Clif',
        category: 'granola',
        image: 'images/whitechobars.webp',
        characteristics: ['Capacity: 450g']
      },
      { 
        name: 'Clif',
        category: 'granola',
        image: 'images/chobars.webp',
        characteristics: ['Capacity: 450 g']
      },
    // Add more products as needed
  ];
  
  // Get DOM elements
  const searchInput = document.getElementById('search-input');
  const filterSelect = document.getElementById('filter-select');
  const productContainer = document.getElementById('product-container');
  
  // Display all products initially
  displayProducts(products);
  
  // Event listener for search button click
  document.getElementById('search-btn').addEventListener('click', searchProducts);
  
  // Function to display products
  function displayProducts(products) {
    productContainer.innerHTML = '';
  
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('col');
      
        const card = document.createElement('div');
        card.classList.add('card');
      
        const image = document.createElement('img');
        image.src = product.image;
        image.classList.add('card-img-top');
        image.alt = 'Product Image';
      
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
      
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = product.name;
      
        const characteristics = document.createElement('p');
        characteristics.classList.add('card-text');
        characteristics.textContent = product.characteristics.join(', ');
      
        cardBody.appendChild(title);
        cardBody.appendChild(characteristics);
      
        card.appendChild(image);
        card.appendChild(cardBody);
      
        productCard.appendChild(card);
        productContainer.appendChild(productCard);
      });
      
  }
  
  // Function to filter and search products
  function searchProducts() {
    const searchValue = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;
  
    const filteredProducts = products.filter(product => {
      if (filterValue === 'all') {
        return product.name.toLowerCase().includes(searchValue);
      } else {
        return (
          product.category === filterValue &&
          product.name.toLowerCase().includes(searchValue)
        );
      }
    });
  
    displayProducts(filteredProducts);
  }

  // Function to display products
function displayProducts(products) {
    productContainer.innerHTML = '';
  
    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('col');
  
      const card = document.createElement('div');
      card.classList.add('card');
  
      const image = document.createElement('img');
      image.src = product.image;
      image.classList.add('card-img-top');
      image.alt = 'Product Image';
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
  
      const title = document.createElement('h5');
      title.classList.add('card-title');
      title.textContent = product.name;
  
      const characteristics = document.createElement('p');
      characteristics.classList.add('card-text');
      characteristics.textContent = product.characteristics.join(', ');
  
      const buyButton = document.createElement('button');
      buyButton.classList.add('btn', 'btn-primary');
      buyButton.textContent = 'Buy';
      buyButton.addEventListener('click', () => {
        // Handle buy button click event here
        // You can redirect to a purchase page or perform any desired action
        console.log('Buy button clicked for product:', product.name);
      });
  
      cardBody.appendChild(title);
      cardBody.appendChild(characteristics);
      cardBody.appendChild(buyButton); // Append the buy button to the card body
  
      card.appendChild(image);
      card.appendChild(cardBody);
  
      productCard.appendChild(card);
      productContainer.appendChild(productCard);
    });
  }
  

  function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
  }
  
  function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
      x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
      y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
      x = x.replace(/^\s+|\s+$/g, "");
      if (x == c_name) {
        return unescape(y);
      }
    }
  }
  
  var song = document.getElementsByTagName('audio')[0];
  var played = false;
  var tillPlayed = getCookie('timePlayed');
  
  function toggleMute() {
    if (song.muted) {
      song.muted = false;
      document.getElementById('muteButton').innerText = 'Mute';
    } else {
      song.muted = true;
      document.getElementById('muteButton').innerText = 'Unmute';
    }
  }
  
  function update() {
    if (!played) {
      if (tillPlayed) {
        song.currentTime = tillPlayed;
        song.play();
        played = true;
      } else {
        song.play();
        played = true;
      }
    } else {
      setCookie('timePlayed', song.currentTime);
    }
  }
  
  document.addEventListener('keypress', function(event) {
    if (event.key === 'f' || event.key === 'F') {
      toggleMute();
    }
  });
  
  setInterval(update, 1000);