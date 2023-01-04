fetch("http://localhost:3000")
.then(response => response.json())
.then(guitars => {
    const acousticGuitars = guitars.acoustic;
    const electricGuitars = guitars.electric;
    const inventoryColumn = document.getElementById("inventory-column");
    const mainBody = document.getElementById("main-body");

    function displayGuitarDetails(guitar){
        const newGuitarImage = document.getElementById("image");
        newGuitarImage.src = guitar.image;
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