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
  document.querySelector(".item__img").appendChild(image) 
  //nom du produit
  document.getElementById("title").innerText = productChoice.name;
  // prix du produit
  document.getElementById("price").innerText = productChoice.price;
  // description du produit
  document.getElementById("description").innerText = productChoice.description;
  // ajout des couleurs via une boucle
productChoice.colors.forEach(function (color) {
  const prodOption = document.createElement("option");
  prodOption.value = color;
  prodOption.innerText = color;
  const prodSelect = document.getElementById("colors");
  prodSelect.appendChild(prodOption)
});
// ajout des produits dans le panier

 
}
