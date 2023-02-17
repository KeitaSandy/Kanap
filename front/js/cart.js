// modification du titre de la page
document.title = "page panier";

//recuperation du panier dans le local storage
let lSBasket = JSON.parse(localStorage.getItem("basket"));

// lien avec la page cart.html ou les produits vont etre ajoutés
let cartItems = document.getElementById("cart__items");
// lien avec le bouton commander html
let order = document.getElementById("order")

// création d'une fonction pour recupérer les données de l'API
function getProductData (){
try {
  fetch("http://localhost:3000/api/products/" + idProduct)
    .then((response) => response.json())
    .then((product) => {
      displayProduct(product);
    });
} catch (error) {
  console.error("Erreur de chargement, veuillez réessayer.");
}};

function displayProduct(product) {
  if(lSBasket === null || lSBasket.length === 0){
    cartItems.innerHTML = "votre panier est vide";
  } else {
    for (let purchaseProduct of product){
      for (let i = 0; i < product.length; i++){
        if (purchaseProduct.id === lSBasket[i].id){

          purchaseProduct.name = lSBasket[i].name;
          purchaseProduct.price = lSBasket[i].price;
          purchaseProduct.img = lSBasket[i].imageUrl;
          purchaseProduct.txt = lSBasket[i].altTxt;
          purchaseProduct.desc = lSBasket[i].description;
          purchaseProduct.color = lSBasket[i].color;
        }
      }
  
    displayBasket(lSBasket);
    }
  }
}


// création du fonction pour afficher le panier

  function displayBasket (lSBasket) {
       // création de la balise article

      let newArticle = document.createElement("article");
      newArticle.setAttribute("class", "cart__item");
      newArticle.setAttribute("data-id", lSBasket[i].idProduct);
      newArticle.setAttribute("data-color", purchaseProduct.color);
      

  // insertion de l'élément DIV pour insérer l'image du produit

      let newDivImg = document.createElement("div");
      newArticle.appendChild(newDivImg);
      newDivImg.className = "cart__item__img";

  // insertion de l'image pour la photo du produit

      let newImg = document.createElement("img");
      newImg.setAttribute("src", purchaseProduct.img);
      newImg.setAttribute("alt", purchaseProduct.txt);
      newDivImg.appendChild(newImg);

  // création de la DIV avec la classe cart__item__content

      let newDivContent =  document.createElement("div");
      newDivContent.setAttribute("class", "cart__item__content");
      newArticle.appendChild(newDivContent);
    
  // creation de la DIV pour la description

    let newDivContentDescription = document.createElement("div");
    newDivContentDescription.setAttribute("class", "cart__item__content__description");
    newDivContent.appendChild(newDivContentDescription);
  
  // création de la balise titre H2 pour le nom du produit
     
    let newH2 = document.createElement("h2");
    newH2.innerHTML = purchaseProduct.name;
    newDivContentDescription.appendChild(newH2);

  // création de la balise P qui indique la couleur du produit

      let newColor = document.createElement("p");
      newColor.innerHTML = purchaseProduct.color;
      newDivContentDescription.appendChild(newColor);
  
  // création de la balise P indique le prix du produit

      let newPrice = document.createElement("p");
      newPrice.innerHTML = purchaseProduct.price + "€";
      newDivContentDescription.appendChild(newPrice);
  
  // creation de la DIV pour les settings
   
      let newDivContentSettings = document.createElement("div");
      newDivContentSettings.setAttribute("class", "cart__item__content__settings");
      newDivContent.appendChild(newDivContentSettings);

  // creation de la DIV pour les settings quantity

      let newDivContentSettingsQuantity = document.createElement("div");
      newDivContentSettingsQuantity.setAttribute("class", "cart__item__content__settings__quantity");
      newDivContentSettings.appendChild(newDivContentSettingsQuantity);
  
  // creation de la balise P pour les qty

      let newQty = document.createElement("p");
      newQty.innerHTML = "qté : ";
      newDivContentSettingsQuantity.appendChild(newQty);
  
  // ensuite on crée une balise input pour modifier la quantité

      let newInput = document.createElement("input");
      newInput.setAttribute("type", "number");
      newInput.setAttribute("class", "itemQuantity");
      newInput.setAttribute("name", "itemQuantity");
      newInput.setAttribute("min", "1");
      newInput.setAttribute("max", "100");
      newInput.setAttribute("value", '${lSbasket[i].quantity}');
      newQty.appendChild(newInput);

  // création de la DIV settings pour delete

      let newDivContentSettingsDelete = document.createElement("div");
      newDivContentSettingsDelete.setAttribute("class", "cart__item__content__settings__delete");
      newDivContentSettings.appendChild(newDivContentSettingsDelete);

  // insertion  de la balise P pour delete

      let newDelete = document.createElement("p");
      newDelete.setAttribute("class", "deleteItem");
      newDelete.innerHTML = "supprimer";
      newDivContentSettingsDelete.appendChild(newDelete);
  }

  
    

  






    
    
  
   
  
   
 





