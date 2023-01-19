//récupération des donnes de l'API
fetch("http://localhost:3000/api/products")
  .then((response) => response.json())
  .then((data) => {
    for (const listProducts of data) {
      console.log(listProducts);
//zone dans laquelle les produits vont etre affichés, dans la section id items.
      const sectionProduct = document.querySelector("#items");
//création de la carte des elements, avec les éléments de l'API.      
      let newProduct = document.createElement("a");
      newProduct.setAttribute("href", `./product.html?id=${listProducts._id}`);
      sectionProduct.appendChild(newProduct);

      let newArticle = document.createElement("article");
      newProduct.appendChild(newArticle);

      let newImg = document.createElement("img");
      newImg.setAttribute("src", listProducts.imageUrl);
      newImg.setAttribute("alt", listProducts.altTxt);
      newArticle.appendChild(newImg);

      let newH3 = document.createElement("h3");
      newH3.setAttribute("class", "productName");
      newH3.innerText = listProducts.name;
      newArticle.appendChild(newH3);

      let newP = document.createElement("p");
      newP.setAttribute("class", "productDescription");
      newP.innerText = listProducts.description;
      newArticle.appendChild(newP);
    }
  });









