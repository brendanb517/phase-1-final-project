fetch("http://localhost:3000/guitars")
.then(response => response.json())
.then(guitars => {
    const acousticGuitars = guitars[0].acoustic;
    const electricGuitars = guitars[1].electric;
    const acousticGuitarsButton = document.getElementById("acoustic-button");
    const electricGuitarsButton = document.getElementById("electric-button");
    const inventoryColumn = document.getElementById("inventory");
    const guitarImage = document.getElementById("featured-guitar-image");
    const guitarBrand = document.getElementById("featured-guitar-brand");
    const guitarModel = document.getElementById("featured-guitar-model");
    const guitarPrice = document.getElementById("featured-guitar-price");
    const guitarDescription = document.getElementById("featured-guitar-description");
    const guitarCondition = document.getElementById("featured-guitar-condition");
    const guitarLevel = document.getElementById("featured-guitar-level");
    const newGuitarForm = document.getElementById("new-guitar-form");

    function displayGuitarDetails(guitar){
        guitarImage.src = guitar.image;
        guitarBrand.textContent = guitar.brand;
        guitarModel.textContent = guitar.model;
        guitarPrice.textContent = guitar.price;
        guitarDescription.textContent = guitar.description;
        guitarCondition.textContent = guitar.condition;
        guitarLevel.textContent = guitar.level;
    }

    function populateInventory(inventory){
        inventoryColumn.innerHTML = "";
        inventory.forEach((guitar) => {
            const newGuitar = document.createElement("img");
            newGuitar.src = guitar.image;
            newGuitar.addEventListener("click", (event) => {
                event.preventDefault();
                displayGuitarDetails(guitar);
            })
            inventoryColumn.appendChild(newGuitar);
        })
    }

    newGuitarForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const newGuitarImage = document.getElementById("new-guitar-image");
        const newGuitarBrand = document.getElementById("new-guitar-brand");
        const newGuitarModel = document.getElementById("new-guitar-model");
        const newGuitarPrice = document.getElementById("new-guitar-price");
        const newGuitarDescription = document.getElementById("new-guitar-description");
        const newGuitarCondition = document.getElementById("new-guitar-condition");
        const newGuitarType = document.getElementById("new-guitar-type");
        const newGuitarSkillLevel = document.getElementById("new-guitar-skill-level");
        const newGuitarPic = document.createElement("img");

        const guitarObj = {}
        guitarObj.image = newGuitarImage.value;
        guitarObj.brand = newGuitarBrand.value;
        guitarObj.model = newGuitarModel.value;
        guitarObj.price = newGuitarPrice.value;
        guitarObj.condition = newGuitarCondition.value;
        guitarObj.description = newGuitarDescription.value;
        guitarObj.level = newGuitarSkillLevel.value;

        displayGuitarDetails(guitarObj);
        populateInventory([...acousticGuitars, guitarObj]);
        
        // if (newGuitarType.value === "Acoustic" || newGuitarType.value === "acoustic") {

        //      fetch("http://localhost:3000/guitars/", {
        //          method: "POST",
        //          headers: {
        //              "Content-Type": "application/json",
        //              "Accept": "application/json"
        //          },
        //          body: JSON.stringify(guitarObj),
        //      })

            newGuitarForm.reset();
        }
    )

    acousticGuitarsButton.addEventListener("mouseover", (event) => {
        event.preventDefault();
        const acousticAudio = document.getElementById("acoustic-guitar-audio");
        acousticAudio.play();
    })

    acousticGuitarsButton.addEventListener("click", (event) => {
        event.preventDefault();
        populateInventory(acousticGuitars);
    })

    electricGuitarsButton.addEventListener("mouseover", (event) => {
        event.preventDefault();
        const electricAudio = document.getElementById("electric-guitar-audio");
        electricAudio.play();
    })

    electricGuitarsButton.addEventListener("click", (event) => {
        event.preventDefault();
        populateInventory(electricGuitars);
    })

    populateInventory(acousticGuitars);
    displayGuitarDetails(acousticGuitars[0]);
})
