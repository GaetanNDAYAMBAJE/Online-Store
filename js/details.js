let product= JSON.parse(sessionStorage.getItem("product"));
if(product){
    let productDetails=`<div class="col-6 image-container">
    <img src="${product.image}" alt="App logo">
    </div>
    <div class="col-6">
        <div class="product-details-container">
                <h4>${product.title}</h4>
            <h2>${product.price}</h2>
            <p>${product.category}</p>
            <p>
                ${product.description}
            </p>
            <div class="row">
                <div class="col-6">
                    <button class="btn-buy" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fal fa-money-bill-wave"></i> Buy Now </button>
                </div>
                <div class="col-6">
                    <button class="btn-cart"><i class="far fa-cart-plus"></i> Add to Cart</button>
                </div>
            </div>
            </div>`;
    
            document.getElementById("details-container").innerHTML=productDetails; 
}else {
    location.href="index.html";
}

