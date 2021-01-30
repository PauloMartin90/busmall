'use strict';
  
    // Global Variables
    var imageStorage = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif','water-can.jpg', 'wine-glass.jpg']
    
    var catalogContainer = document.getElementById('catalog-container');
    var leftCatalogImage = document.getElementById('catalog_1');
    var centerCatalogImage = document.getElementById('catalog_2');
    var rightCatalogImage = document.getElementById('catalog_3');
    var imageSource = [leftCatalogImage, centerCatalogImage, rightCatalogImage]

    var resultsDiv = document.getElementById('results');
    var ulElement = document.createElement('ul');
    var h2Element = document.createElement('h2');
    var button = document.getElementById('button');
    var electionCounter = 1
    var oldRandomCatalog = []
    var newGlobalImage
    var roundsLimit = 25

    ////// Image Poll Constructor 
    function CatalogImage(name) {      // Main Constructor To make all Data
        this.name = name.substring(0, name.length - 4)
        this.timesClicked = 0;
        this.timesShown = 0;
        this.rating = 0;
        this.image = `img/${name}`;
    CatalogImage.allImages.push(this); // Pushs into Global Array
    }

    ////// Generates 3 random images 
    function randomCatalogimg() {     // Interacts with Constructor CatalogImage
        // Chooses Random Images from Array
        var indexImage = Math.floor(Math.random() * CatalogImage.allImages.length);
        var imageCatalog = CatalogImage.allImages[indexImage];
    return imageCatalog
    }

    ////// Function to Render Images on the page 
    function renderCatalog(testImage) {      // Stand alone Function
            for (var i = 0; i < testImage.length; i++){
            imageSource[i].src = testImage[i].image; // Pulls the Source Image
            testImage[i].timesShown++; // Counts & Logs Click
            }
          }

    ///// Error Checker Function
    function randomImageChecker (newArray, oldArray) {
          while(
            oldArray[0].name === newArray[0].name ||
            oldArray[1].name === newArray[0].name ||
            oldArray[2].name === newArray[0].name ||
            oldArray[0].name === newArray[1].name ||
            oldArray[1].name === newArray[1].name ||
            oldArray[2].name === newArray[1].name ||
            oldArray[0].name === newArray[2].name ||
            oldArray[1].name === newArray[2].name ||
            oldArray[2].name === newArray[2].name) 
            {
    
            newArray = [randomCatalogimg(), randomCatalogimg(), randomCatalogimg()]; // Gives random arrray // Also a External Function is being used          
      }
      return newArray
    }
    ////// Function to add property information
    function clickLogger(event) {      // Interacts with function electionPeriod
      event.preventDefault();
      for (var i = 0; i < CatalogImage.allImages.length; i++) {
            if (event.target.src.includes(CatalogImage.allImages[i].image)) {
                CatalogImage.allImages[i].timesClicked++;
                // console.log(CatalogImage.allImages[i])
            } 
          }
          electionPeriod()
      }

    ///// Function to Start Election
    function electionPeriod() {     // Interacts with function imageGenerator(event)
      if (electionCounter == roundsLimit) {
        alert('That\'s ' + roundsLimit + ' Rounds of Voting!');
        catalogContainer.removeEventListener('click', clickLogger); // Removes Listner to Stop Voting
      }
            var newRandomCatalog = [randomCatalogimg(), randomCatalogimg(), randomCatalogimg()]

            // random Checker
            newRandomCatalog = randomImageChecker(newRandomCatalog, oldRandomCatalog)

            renderCatalog(newRandomCatalog)
            
            oldRandomCatalog = newRandomCatalog
            electionCounter++         
            storeCatalogData('product', CatalogImage.allImages)
            ratingCalculator()
    }

    ////// Function to Display Images
    function displayList() {      // Interacts with function chartGenerator
            resultsDiv.appendChild(h2Element);
            h2Element.appendChild(ulElement);

        for (var i = 0; i < CatalogImage.allImages.length; i++) {
              var liElement = document.createElement('li');
              liElement.textContent = (CatalogImage.allImages[i].name + ' was shown ' + CatalogImage.allImages[i].timesShown + ' times, and was clicked on ' + CatalogImage.allImages[i].timesClicked + ' times.');
              ulElement.appendChild(liElement);
          }
    }

    ////// Top Catalog Choice
    function topCatalogItems() {
        var listOfCatalog = fetchCatalogData('product')
        var topCatalog = listOfCatalog[0]
        for (var i = 0; i < listOfCatalog.length; i++) {
          if (topCatalog.rating < listOfCatalog[i].rating) {
              topCatalog = listOfCatalog[i]
          }
        }
    storeCatalogData('top catalog item', topCatalogItem)
    }

    ///// Rating Function
    function ratingCalculator() {
      var listOfCatalog = fetchCatalogData('product')
      for (var i=0; i < listOfCatalog.length; i++) {
        var ratingCatalogItem = listOfCatalog[i].timesClicked/listOfCatalog[i].timesShown
        listOfCatalog[i].rating = ratingCatalogItem.toFixed(2)
      }
      storeCatalogData('product', listOfCatalog)
    }

    ///// Stores Catalog Information
    function storeCatalogData(categoryName, object) { // categoryName is List Name in local storage and object is an object
      var stringObject = JSON.stringify(object);
      localStorage.setItem(categoryName, stringObject);
    }

    ///// Fetchs Catalog Infromation
    function fetchCatalogData(categoryName) { // categoryName is the List Name in local storage
      var reObjectify = localStorage.getItem(categoryName);
      var productsFromStorage = JSON.parse(reObjectify);
      return productsFromStorage;
    }

 ////// Chart Constructor
    function chartGenerator() {      // Interacts with Function displayList
        
      //Initiates The arrays needed for chartGenerator Function
        var productsNames = [] 
        var votesByProduct = [];
        var timesProductsAreShow = [];
       // Fills Array with Data
       for (var i = 0; i < CatalogImage.allImages.length; i++) {
          productsNames.push(CatalogImage.allImages[i].name);
          votesByProduct.push(CatalogImage.allImages[i].timesClicked);
          timesProductsAreShow.push(CatalogImage.allImages[i].timesShown);
       }
     
      var ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {      // Chart constructor API
          type: 'bar',
          data: {
            labels: productsNames, // array of strings goes here
            datasets: [{
              label: 'times clicked',
              data: votesByProduct, // array of numbers goes here
              // data: votesByProduct,
              backgroundColor: new Array(12).fill('rgba(255, 99, 132, 1)'),
              borderWidth: 1
            },
            {
              label: 'times Shows',
              data: timesProductsAreShow,
              backgroundColor: new Array(12).fill('rgba(54, 162, 235, 1)'),
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      }

    // Creates Array of Data or if existing nothing
    CatalogImage.allImages = fetchCatalogData('product') || [];
  
    // Intialize Images
    if (CatalogImage.allImages.length == 0 ){
    // Creating Objects through Constructor
    for (var i = 0; i < imageStorage.length; i++) {
        new CatalogImage(imageStorage[i]); 
    }
  }
    // Chooses randomly from the Global Image Array
    for (var i = 0; i < imageSource.length; i++){
      newGlobalImage = randomCatalogimg();
      oldRandomCatalog.push(newGlobalImage)
    }
    renderCatalog(oldRandomCatalog)
    

    // Voting Event
    catalogContainer.addEventListener('click', clickLogger)
    //Results Event
    button.addEventListener('click', displayList)