'use strict';

    // Constructor 
    function CatalogImage(image, name) {
        this.name = name
        this.timesClicked = 0;
        this.timesShown = 0;
        this.image = image;

    CatalogImage.allImages.push(this); // Pushs into Global Array
    }
    //////////////////////////////////////////////////////////
    // Generates 3 random images
        function randomCatalogimg() {
    
        // randomIndex from our array
        var leftIndex = Math.floor(Math.random() * CatalogImage.allImages.length);
        var centerIndex = Math.floor(Math.random() * CatalogImage.allImages.length);
        var rightIndex = Math.floor(Math.random() * CatalogImage.allImages.length);
    
        while (rightIndex === leftIndex || leftIndex == centerIndex || centerIndex == rightIndex) {
        rightIndex = Math.floor(Math.random() * CatalogImage.allImages.length);
        leftIndex = Math.floor(Math.random() * CatalogImage.allImages.length);
        centerIndex = Math.floor(Math.random() * CatalogImage.allImages.length);
        }
    
        var leftCatalog = CatalogImage.allImages[leftIndex];
        var centerCatalog = CatalogImage.allImages[centerIndex];
        var rightCatalog = CatalogImage.allImages[rightIndex];

    
        return [leftCatalog, centerCatalog, rightCatalog];
    }
    //////////////////////////////////////////////////////////
    // Function to Render Images on the page
        function renderCatalog(leftCatalog, centerCatalog, rightCatalog) {
        leftCatalogImage.src = leftCatalog.image; // Pulls the Source Image
        leftCatalog.timesShown++;
    
        centerCatalogImage.src = centerCatalog.image;
        centerCatalog.timesShown++;

        rightCatalogImage.src = rightCatalog.image;
        rightCatalog.timesShown++;
    }
    ////////////////////////////////////////////////////////////
        function imageGenerator(event) {
        for (var i = 0; i < CatalogImage.allImages.length; i++) {
        if (event.target.src.includes(CatalogImage.allImages[i].image)) {
            CatalogImage.allImages[i].timesClicked++;
            console.log(CatalogImage.allImages[i])
            } 
        }
        electionCounter++
        var randomCatalog = randomCatalogimg(); // Gives random arrray
        renderCatalog(randomCatalog[0], randomCatalog[1], randomCatalog[2])
        if (electionCounter == roundsLimit) {
            alert('That\'s ' + roundsLimit + ' Rounds of Voting!');
            catalogContainer.removeEventListener('click', imageGenerator);
        }
    }
    ////////////////////////////////////////////////////////////
        function displayList(){
    
        var ul = document.createElement('ul');
        var h2 = document.createElement('h2');
        resultsDiv.appendChild(h2);
        resultsDiv.appendChild(ul);
        for (var i = 0; i < CatalogImage.allImages.length; i++){
        var li = document.createElement('li');
        li.textContent = (CatalogImage.allImages[i].name + ' was shown ' + CatalogImage.allImages[i].timesShown + ' times, and was clicked on ' + CatalogImage.allImages[i].timesClicked + ' times.');
        ul.appendChild(li);
        }
    }


  ////////////////////////////////////////////////////////////////////////////
  // Global Variables
  var imageStorage = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif','img/water-can.jpg', 'img/wine-glass.jpg']
  var catalogItem = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];

    var catalogContainer = document.getElementById('catalog-container');
    var leftCatalogImage = document.getElementById('catalog_1');
    var centerCatalogImage = document.getElementById('catalog_2');
    var rightCatalogImage = document.getElementById('catalog_3');
    var electionCounter = 1
    var roundsLimit = 25
    var button = document.getElementById('button');
    var resultsDiv = document.getElementById('results');


    CatalogImage.allImages = [];  // Global Array

    // Creating Objects through Constructor
    for (var i = 0; i < imageStorage.length; i++) {
        new CatalogImage(imageStorage[i], catalogItem[i]);  
    console.log(CatalogImage.allImages);
    }

    // Chooses randomly from the Global Image Array
    var randomCatalog = randomCatalogimg();
    renderCatalog(randomCatalog[0], randomCatalog[1], randomCatalog[2])


    // Voting Event
    catalogContainer.addEventListener('click', imageGenerator)
    //Results Event
    button.addEventListener('click', displayList)








