'use strict';
    ////// Image Poll Constructor 
    function CatalogImage(image, name) {
        this.name = name
        this.timesClicked = 0;
        this.timesShown = 0;
        this.image = image;
    CatalogImage.allImages.push(this); // Pushs into Global Array
    }

    ////// Chart Constructor
    function chartGenerator(catalogItem, votesByProduct, timesProductsAreShow) {
      var ctx = document.getElementById('myChart').getContext('2d');

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: catalogItem, // array of strings goes here
            datasets: [{
              label: 'times clicked',
              data: votesByProduct, // array of numbers goes here
              // data: votesByProduct,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1
            },
            {
              label: 'times Shows',
              data: timesProductsAreShow,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
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
      
    ////// Generates 3 random images 
    function randomCatalogimg() {
        // Chooses Random Images from Array
        var leftIndex = Math.floor(Math.random() * CatalogImage.allImages.length);
        var centerIndex = Math.floor(Math.random() * CatalogImage.allImages.length);
        var rightIndex = Math.floor(Math.random() * CatalogImage.allImages.length);
            // Error Checker so that all Images are Unique
            while (rightIndex === leftIndex || leftIndex == centerIndex || centerIndex == rightIndex) {
                rightIndex = Math.floor(Math.random() * CatalogImage.allImages.length);
                leftIndex = Math.floor(Math.random() * CatalogImage.allImages.length);
                centerIndex = Math.floor(Math.random() * CatalogImage.allImages.length);
            }
        // Intiallizes Images to become objects and pass images to Variable
        var leftCatalog = CatalogImage.allImages[leftIndex];
        var centerCatalog = CatalogImage.allImages[centerIndex];
        var rightCatalog = CatalogImage.allImages[rightIndex];
    return [leftCatalog, centerCatalog, rightCatalog];
    }

    ////// Function to Render Images on the page 
    function renderCatalog(leftCatalog, centerCatalog, rightCatalog) {
            leftCatalogImage.src = leftCatalog.image; // Pulls the Source Image
            leftCatalog.timesShown++; // Counts & Logs Click
            centerCatalogImage.src = centerCatalog.image; // Pulls the Source Image
            centerCatalog.timesShown++; // Counts & Logs Click
            rightCatalogImage.src = rightCatalog.image; // Pulls the Source Image
            rightCatalog.timesShown++; // Counts & Logs Click
    }

    ///// Function to Start Election
    function electionPeriod() {
      var electionCounter = 1
      var roundsLimit = 25
      // Voting Period Rendering Images and creating a new image set // possibly move to it's own Function
      electionCounter++
      randomCatalog = randomCatalogimg(); // Gives random arrray // Also a External Function is being used
      renderCatalog(randomCatalog[0], randomCatalog[1], randomCatalog[2]) // Renders images to page
      if (electionCounter == roundsLimit) {
          alert('That\'s ' + roundsLimit + ' Rounds of Voting!');
          catalogContainer.removeEventListener('click', imageGenerator); // Removes Listner to Stop Voting
          console.log(CatalogImage.allImages)
        }
    }

    ////// Function to add property information
    function imageGenerator(event) {
            for (var i = 0; i < CatalogImage.allImages.length; i++) {
                if (event.target.src.includes(CatalogImage.allImages[i].image)) {
                    CatalogImage.allImages[i].timesClicked++;
                    // console.log(CatalogImage.allImages[i])
                } 
              }
      electionPeriod() // Detangle Some how
    }

    ////// Function to Display Images
    function displayList() {
        var resultsDiv = document.getElementById('results');
        var ul = document.createElement('ul');
        var h2 = document.createElement('h2');
            resultsDiv.appendChild(h2);
            resultsDiv.appendChild(ul);

        for (var i = 0; i < CatalogImage.allImages.length; i++) {
              var li = document.createElement('li');
              li.textContent = (CatalogImage.allImages[i].name + ' was shown ' + CatalogImage.allImages[i].timesShown + ' times, and was clicked on ' + CatalogImage.allImages[i].timesClicked + ' times.');
              ul.appendChild(li);
          }

        var votesByProduct = [];
        var timesProductsAreShow = [];
    
        // Fills Array with Data
        for (var i = 0; i < CatalogImage.allImages.length; i++) {
            votesByProduct.push(CatalogImage.allImages[i].timesClicked);
            timesProductsAreShow.push(CatalogImage.allImages[i].timesShown);
        }
  
      chartGenerator(catalogItem, votesByProduct, timesProductsAreShow) // Calls Function chartGenerator(object_property_1, object_property_2, object_property_3)
    }
        
  // Global Variables
  var imageStorage = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif','img/water-can.jpg', 'img/wine-glass.jpg']
  var catalogItem = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
    var catalogContainer = document.getElementById('catalog-container');
    var leftCatalogImage = document.getElementById('catalog_1');
    var centerCatalogImage = document.getElementById('catalog_2');
    var rightCatalogImage = document.getElementById('catalog_3');
    var button = document.getElementById('button');


    // Creates Array of Assets
    CatalogImage.allImages = [];  // Global Array
    // Creating Objects through Constructor
    for (var i = 0; i < imageStorage.length; i++) {
        new CatalogImage(imageStorage[i], catalogItem[i]);  
        // console.log(CatalogImage.allImages);
    }
    // Chooses randomly from the Global Image Array
    var randomCatalog = randomCatalogimg();
    renderCatalog(randomCatalog[0], randomCatalog[1], randomCatalog[2])
    // Voting Event
    catalogContainer.addEventListener('click', imageGenerator)
    //Results Event
    button.addEventListener('click', displayList)
  










    