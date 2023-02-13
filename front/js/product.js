// Récupération de la chaîne de requête dans l'URL du navigateur pour extraire de l'ID de l'URL
const idProduct = new URLSearchParams(window.location.search).get("id");
console.log(idProduct);

// Si on a bien récupéré un id on récupère les données de l'API correspondant à cet id
if (idProduct !== null) 
try {
  fetch("http://localhost:3000/api/products/" + idProduct)
    .then((response) => response.json())
    .then((data) => {
      displayProduct(data);
    });
    }
    catch(error) {
        console.error("Erreur");
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
  // mise en place du bouton d'écoute
  addToBasket.addEventListener("click", () => {

  //on recupere la couleur sélectionnée
    let color= document.getElementById('colors').value;

  // si une couleur n'est pas sélectionnée un msg d'alerte s'affiche
  if (color === ""){
    alert("Merci de renseigner une couleur svp!")
  };

  // on récupère les quantités
    let quantity = parseInt(document.getElementById('quantity').value);

  // on récupère l'ID du produit choisi
    const id = idProduct;

  // vérifier que la soit quantité renseignée avant d'ajouter au panier 
  // sinon un msg d'alerte s'affiche
     if (quantity == 0 || quantity > 100 ) {
      alert("Merci de préciser une quantité entre 1 et 100 svp!");
    } else{

  // on cré un produit avec ces valeurs
      let finalProduct = {
        id: id,
        color: color,
        quantity: quantity,
      };

  //localstorage
      let lSBasket = JSON.parse(localStorage.getItem("basket")) || [];

  // Si le produit n'existe pas dans le panier
      let productFind = false;
      
      for (let i = 0; i < lSBasket.length; i++) {
        if (
          lSBasket[i].id === finalProduct.id &&
          lSBasket[i].color === finalProduct.color
        ) {
          productFind = i;
        }
      }

  // le produit est deja dans le panier
      if (productFind !== false) {
        lSBasket[productFind].quantity =
          parseInt(lSBasket[productFind].quantity) + finalProduct.quantity;
      } else {
        lSBasket.push(finalProduct);
      }
      localStorage.setItem("basket", JSON.stringify(lSBasket));
  // msg pour confirmer l'ajout au panier
     alert("produit ajouté au panier!")
     document.location.href = "cart.html";
    } 
  });

  
}
