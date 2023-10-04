console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogImageContainer = document.getElementById("dog-image-container");
    const breedDropdown = document.getElementById("breed-dropdown");
    const dogBreedsList = document.getElementById("dog-breeds");
  
    // Challenge 1: Fetch and display dog images
    fetch(imgUrl)
      .then((response) => response.json())
      .then((data) => {
        data.message.forEach((imageUrl) => {
          const imgElement = document.createElement("img");
          imgElement.src = imageUrl;
          dogImageContainer.appendChild(imgElement);
        });
      });
  
    // Challenge 2: Fetch and display dog breeds
    fetch(breedUrl)
      .then((response) => response.json())
      .then((data) => {
        const breeds = Object.keys(data.message);
        breeds.forEach((breed) => {
          const breedItem = document.createElement("li");
          breedItem.innerText = breed;
          dogBreedsList.appendChild(breedItem);
        });
      });
  
    // Challenge 3: Change font color on breed item click
    dogBreedsList.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        e.target.style.color = "blue"; // You can choose any color here
      }
    });
  
    // Challenge 4: Filter breeds by starting letter
    breedDropdown.addEventListener("change", () => {
      const selectedLetter = breedDropdown.value;
      const breedItems = dogBreedsList.getElementsByTagName("li");
      Array.from(breedItems).forEach((breedItem) => {
        if (breedItem.innerText.startsWith(selectedLetter)) {
          breedItem.style.display = "block";
        } else {
          breedItem.style.display = "none";
        }
      });
    });
  });
  
