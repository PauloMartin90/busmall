'use strict';
    ////// Image Poll Constructor 
    function CatalogImage(image, name) {      // Main Constructor To make all Data
        this.name = name
        this.timesClicked = 0;
        this.timesShown = 0;
        this.image = image;
    CatalogImage.allImages.push(this); // Pushs into Global Array
    }

    ////// Generates 3 random images 
    function randomCatalogimg() {     // Interacts with Constructor CatalogImage
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

    ////// Chart Constructor
    function chartGenerator(catalogItem, votesByProduct, timesProductsAreShow) {      // Interacts with Function displayList
      var ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {      // Chart constructor API
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
      
    ////// Function to Render Images on the page 
    function renderCatalog(leftCatalog, centerCatalog, rightCatalog) {      // Stand alone Function
            leftCatalogImage.src = leftCatalog.image; // Pulls the Source Image
            leftCatalog.timesShown++; // Counts & Logs Click
            centerCatalogImage.src = centerCatalog.image; // Pulls the Source Image
            centerCatalog.timesShown++; // Counts & Logs Click
            rightCatalogImage.src = rightCatalog.image; // Pulls the Source Image
            rightCatalog.timesShown++; // Counts & Logs Click
    }

    ////// Function to add property information
    function imageGenerator(event) {      // Interacts with function electionPeriod
            for (var i = 0; i < CatalogImage.allImages.length; i++) {
                if (event.target.src.includes(CatalogImage.allImages[i].image)) {
                    CatalogImage.allImages[i].timesClicked++;
                    // console.log(CatalogImage.allImages[i])
                } 
              }
      electionPeriod() // Detangle Some how
    }

    ///// Function to Start Election
    function electionPeriod() {     // Interacts with function imageGenerator(event)
      var roundsLimit = 25
      var newRandomCatalog = randomCatalogimg()
       // Error Checking for Images to be Different
      //  console.log(newRandomCatalog)
          for (var i = 0; i < randomCatalog.length; i++) {
            while(randomCatalog[i].name === newRandomCatalog[0].name || randomCatalog[i].name === newRandomCatalog[1].name || randomCatalog[i].name === newRandomCatalog[2].name) {
              console.log("This is the image you are looking at:  ",randomCatalog[i].name)  
              console.log("These are the 3 images you have:  ")
              console.log(newRandomCatalog[0].name)
              console.log(newRandomCatalog[1].name)
              console.log(newRandomCatalog[2].name)
              console.log("////////////////////////////  WARNING  /////////////////////////////")
              console.log("////                THESE ARE YOUR LOGIC RESULTS                ////")
              console.log("////                                                            ////")
              console.log("////            TEST FAILED:  ", randomCatalog[i].name === newRandomCatalog[0].name, randomCatalog[i].name === newRandomCatalog[1].name, randomCatalog[i].name === newRandomCatalog[2].name, "                ////")
              console.log("////    WARNING: One of you images are the same as the other    ////")
              console.log("////////////////////////////////////////////////////////////////////")
              
              var imageContainer = randomCatalogimg(); // Gives random arrray // Also a External Function is being used
              newRandomCatalog[i] = imageContainer[i]
              console.log(imageContainer[i])


              console.log("GENERATING NEW IMAGES TO REPLACE TRUE STATMENT")
              console.log("what is the old image 0:  ",randomCatalog[i].name)  
              console.log("These are the 3 new images because you failed the logic test:  ")
              console.log(newRandomCatalog[0].name)
              console.log(newRandomCatalog[1].name)
              console.log(newRandomCatalog[2].name)
              console.log("This is iteration: ", i)
              console.log("Congrats These Names are different")
              console.log("Old --> New: ", randomCatalog[0].name, "--->" , newRandomCatalog[0].name)
              console.log("Old --> New: ", randomCatalog[1].name, "--->" , newRandomCatalog[1].name)
              console.log("Old --> New: ", randomCatalog[2].name, "--->" , newRandomCatalog[2].name)


            }

          }

      randomCatalog = newRandomCatalog
      renderCatalog(newRandomCatalog[0], newRandomCatalog[1], newRandomCatalog[2]) // Renders images to page
      electionCounter++
      // Creates Condition Remove Listener
      if (electionCounter == roundsLimit) {
          alert('That\'s ' + roundsLimit + ' Rounds of Voting!');
          catalogContainer.removeEventListener('click', imageGenerator); // Removes Listner to Stop Voting
          console.log(CatalogImage.allImages)
        }

    }

    ////// Function to Display Images
    function displayList() {      // Interacts with function chartGenerator
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
          //Initiates The arrays needed for chartGenerator Function
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
    var electionCounter = 1


    // Creates Array of Assets
    CatalogImage.allImages = [];  // Global Array
    // Creating Objects through Constructor
    for (var i = 0; i < imageStorage.length; i++) {
        new CatalogImage(imageStorage[i], catalogItem[i]); 
    }
    // Chooses randomly from the Global Image Array
    var randomCatalog = randomCatalogimg();
    renderCatalog(randomCatalog[0], randomCatalog[1], randomCatalog[2])
    // Voting Event
    catalogContainer.addEventListener('click', imageGenerator)
    //Results Event
    button.addEventListener('click', displayList)