import data from "./product.json"  with { type: "json" };

/* console.log(data); */

let productList = data.products;

console.log(productList);

let thumImg = document.querySelectorAll('.thum-img');
let productDetails = document.querySelector(".product-details");

function showProductDetails(item){
    let html = `<figure>
        <img src="${item.img}"/>
        <figcaption>${item.name}</figcaption>
    </figure>
    <div class="price-tag">
        <span class="original-price">
            <span>&#8377;</span>
            <h6 class="price">${item.price}</h6>
            <sup>00</sup>
        </span>
        <span class="mrp-price">
            <span>M.R.P. : </span>
            <p class="price">&#8377; ${item.mrpprice}.00</p>
        </span>
    </div>`;

    return html;
}

thumImg.forEach((item, index) => {
    item.addEventListener("click", function(){
        productDetails.innerHTML = "";
        thumImg.forEach((item) => item.classList.remove('active'));
        this.classList.add("active");
        productDetails.insertAdjacentHTML("beforeend", showProductDetails(productList[index]))
    })
})

window.addEventListener("load", function(){
    productDetails.innerHTML = showProductDetails(productList[0])
})