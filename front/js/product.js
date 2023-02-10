// Récupération de la chaîne de requête dans l'URL du navigateur pour extraire de l'ID de l'URL
const idProduct = new URLSearchParams(window.location.search).get("id");
console.log(idProduct);

// Si on a bien récupéré un id on récupère les données de l'API correspondant à cet id
if (idProduct !== null) {
  fetch("http://localhost:3000/api/products/" + idProduct)
    .then((response) => response.json())
    .then((data) => {
      displayProduct(data);
    });
}

function displayProduct(productChoice) {
  // ajout du titre du produit dans la balise title du navigateur
  console.log(productChoice);
  document.title = productChoice.name;
  //creation d'une balise image
  const image = document.createElement("img");
  //insertion de l'image du produit
  image.src = productChoice.imageUrl;
  image.alt = productChoice.altTxt;
  document.querySelector(".item__img").appendChild(image);
  //nom du produit
  document.getElementById("title").innerText = productChoice.name;
  // prix du produit
  document.getElementById("price").innerText = productChoice.price;
  // description du produit
  document.getElementById("description").innerText = productChoice.description;
  // ajout des couleurs via une boucle
  const prodSelect = document.getElementById("colors");
  for (let color of productChoice.colors) {
    const prodOption = document.createElement("option");
    prodOption.value = color;
    prodOption.innerText = color;
    prodSelect.appendChild(prodOption);
  }

  // click sur le bouton
  const button = document.getElementById("addtocart");

  // création du bouton d'ajout au panier

  let addToBasket = document.getElementById("addToCart");

  //localstorage
  let lSBasket = JSON.parse(localStorage.getItem("basket"));
  addToBasket.addEventListener("click", () => {
    //on recupere la couleur sélectionnée
    let colorChoice= document.getElementById('colors').value;
    // on recupère la quantité souhaitée
    let quantityChoice = document.getElementById('quantity').value;
    // on récupère l'ID du produit choisi
    const id = idProduct;
    // vérifier qu'il y a une couleur ET une quantité renseignés avant d'ajouter au panier (avec mini/maxi pour les quantités)
    if (quantityChoice == 0 || quantityChoice > 100 || colorChoice == "") {
      alert("Merci de préciser une quanité entre 1 et 100 et/ou une couleur");
    } else{
      // on cré un produit avec ces valeurs
      let finalProduct = {
        id: id,
        name: productChoice.name,
        img: productChoice.imageUrl,
        color: colorChoice,
        quantity: quantityChoice,       
      }
      console.log(finalProduct);
      localStorage.setItem("finalProduct", JSON.stringify(finalProduct));
    }
    
    
     
  });

  
}
