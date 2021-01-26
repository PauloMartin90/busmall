var resultsDiv = document.getElementById('results'); //this is for when the max number of rounds is reached, a button will appear that will show results if you click on it
var ul = document.createElement('ul');
var h2 = document.createElement('h2');
h2.textContent = 'Results';
var button = document.getElementById('button');

function displayList(){
  resultsDiv.appendChild(h2);
  resultsDiv.appendChild(ul);
  for (var i = 0; i < ProductImage.allImages.length; i++){
    var li = document.createElement('li');
    li.textContent = (ProductImage.allImages[i].name + ' was shown ' + ProductImage.allImages[i].timesShown + ' times, and was clicked on ' + ProductImage.allImages[i].timesClicked + ' times.');
    ul.appendChild(li);
  }
}

button.addEventListener('click', function (event){
  console.log(event.target);
  displayList();
});
