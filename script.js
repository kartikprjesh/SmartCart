const product=[
    {
        id:1,
        name:"Wireless headphone",
        price:"Rs."+1499,
        category:"electronics",
        Image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"

    },
    {
        id:2,
        name:"Smart Watch",
        price:"Rs."+2499,
        category:"electronics",
        Image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
   {
    id:3,
    name:"Running shoes",
    price:"Rs."+1999,
    category:"shoes",
    Image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
 },

 {
    id:4,
    name:"T-shirt",
    price:"Rs."+799,
    category:"Cloths",
    Image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
 },
 {
    id:5,
    name:"Laptop",
    price:"Rs."+54999,
    category:"electronics",
    Image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
 },
 {
    id:6,
    name:"Sneakears",
    price:"Rs."+1499,
    category:"Shoes",
    Image:"https://images.unsplash.com/photo-1549298916-b41d501d3772",
 },
 {
    id:7,
    name:"Hoodie",
    price: "Rs."+1299,
    category:"cloths",
    Image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7"
 },

 {
    id:8,
    name:"Bluetooth speaker",
    price:"Rs."+1799,
    category:"Electronics",
    Image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"
 }
];

const productContainer=document.getElementById("productContainer");
function displayProduct(productList){
    productContainer.innerHTML="",
    productList.forEach(function(product){
        const card=document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML=`
        <img src="${product.Image}" alt="${product.name}">
        <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <div class="product-price">
        ${product.price}
        </div>

        <button
        class="add-cart"
        data-id="${product.id}">
        Add  to cart
        </button>

        </div>

        `;

        productContainer.appendChild(card);
    })
}

displayProduct(product);


let cart=[];

productContainer.addEventListener("click",function(event){
    if(event.target.classList.contains("add-cart")){
        const productId=Number(event.target.dataset.id);
        const product=products.find(function(item){
            return item.id===productId;

        });
        cart.push(product);

        document.getElementById("cartCount").innerHTML=cart.length;
        console.log("Added to cart:",product);
        alert(product.name + "added to cart ");
        
    }
});