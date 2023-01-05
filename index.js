fetch("http://localhost:3000")
.then(response => response.json())
.then(guitars => {
    const acousticGuitars = guitars.acoustic;
    const electricGuitars = guitars.electric;
    const inventoryColumn = document.getElementById("inventory-column");
    const mainBody = document.getElementById("main-body");
    const guitarImage = document.getElementById("main-guitar-image");
    const guitarBrand = document.getElementById("main-guitar-brand");
    const guitarModel = document.getElementById("main-guitar-model");
    const guitarPrice = document.getElementById("main-guitar-price");
    const guitarDescription = document.getElementById("main-guitar-description");
    const guitarCondition = document.getElementById("main-guitar-condition");
    const guitarLevel = document.getElementById("main-guitar-level");

    function displayGuitarDetails(guitar){
        guitarImage.src = guitar.image;
        guitarBrand.textContent = guitar.brand;
        guitarModel.textContent = guitar.model;
        guitarPrice.textContent = guitar.price;
        guitarDescription.textContent = guitar.description;
        guitarCondition.textContent = guitar.condition;
        guitarLevel = guitar.level;
    }
    function populateInventory(inventory){
        inventoryColumn.innerHTML = "";
        inventory.forEach((guitar) => {
            const newGuitarListElement = document.createElement("li");
            const newGuitar = document.createElement("img");
            newGuitar.src = guitar.image;
            newGuitar.addEventListener("click", (event) => {
                event.preventDefault();
            })
            newGuitarListElement.appendChild(newGuitar);
            inventoryColumn.appendChild(newGuitarListElement);
        })
    }
})