//récupération des donnes de l'API
fetch("http://localhost:3000/api/products")
  .then((response) => response.json())
  .then((list) => {
    for (let prod of list) {
      displayProduct(prod);
    }
  });


function displayProduct(product) {
        console.log(product);
        //zone dans laquelle les produits vont etre affichés, dans la section id items.
        const sectionProduct = document.querySelector("#items");
        //création de la carte des produits, avec les éléments de l'API.
        let newProduct = document.createElement("a");
        newProduct.setAttribute("href", `./product.html?id=` + product._id);
        sectionProduct.appendChild(newProduct);

        let newArticle = document.createElement("article");
        newProduct.appendChild(newArticle);

        let newImg = document.createElement("img");
        newImg.setAttribute("src", product.imageUrl);
        newImg.setAttribute("alt", product.altTxt);
        newArticle.appendChild(newImg);
        let newH3 = document.createElement("h3");
        newH3.setAttribute("class", "productName");
        newH3.innerText = product.name;
        newArticle.appendChild(newH3);

        let newP = document.createElement("p");
        newP.setAttribute("class", "productDescription");
        newP.innerText = product.description;
        newArticle.appendChild(newP);

}





