const products = [
  { id: 1, name: "Product 1", price: 3, image: "https://placehold.co/300" },
  { id: 2, name: "Product 2", price: 5, image: "https://placehold.co/300" },
  { id: 3, name: "Product 3", price: 1, image: "https://placehold.co/300" }
];

function getParams(param) {
    const paramString = window.location.search;
    const params=new URLSearchParams(paramString);
    return params.get(param);
}

function productEmplate(product){
    return`<section class="product">
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>$${product.price}</p>
</section>`;
}

function getProducctDetail() {
    const id =getParams("productId");
    if(id) {
        const product = products.find((p) => p.id == id);
        if (product){
            output("main",productTemplate(product));
        }
    }
}

function output(selector, markup) {
    const element = document.querySelector(selector);
    element.insertAdjacentHTML("beforeend", markup);
}

getProductDetails();