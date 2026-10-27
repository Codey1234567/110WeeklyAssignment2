let addButton = document.getElementsByClassName("shop-item-button");
let cart = [];
let cartItems = document.getElementsByClassName("cart-items")[0];
let totalhtml = document.getElementsByClassName("cart-total-price")[0];

addButton[0].onclick = function() {
    console.log("Item 1 Added");
    if (cart.indexOf("Item 1") === -1) {
        addItem("album 1", "$12.99", "Images/Album 1.png", "Item 1");
        cart.push("Item 1");
    } else {
        alert("Item already in cart");
    }
}
addButton[1].onclick = function() {
    console.log("Item 2 Added");
    if (cart.indexOf("Item 2") === -1) {
        addItem("album 2", "$14.99", "Images/Album 2.png", "Item 2");
        cart.push("Item 2");
    } else {
        alert("Item already in cart");
    }
}
addButton[2].onclick = function() {
    console.log("Item 3 Added");
    if (cart.indexOf("Item 3") === -1) {
        addItem("Album 3", "$9.99", "Images/Album 3.png", "Item 3");
        cart.push("Item 3");
    } else {
        alert("Item already in cart");
    }
}
addButton[3].onclick = function() {
    console.log("Item 4 Added");
    if (cart.indexOf("Item 4") === -1) {
        addItem("Album 4", "$19.99", "Images/Album 4.png", "Item 4");
        cart.push("Item 4");
    } else {
        alert("Item already in cart");
    }
}
addButton[4].onclick = function() {
    console.log("Item 5 Added");
    if (cart.indexOf("Item 5") === -1) {
        addItem("T-Shirt", "$19.99", "Images/Shirt.png", "Item 5");
        cart.push("Item 5");
    } else {
        alert("Item already in cart");
    }
}
addButton[5].onclick = function() {
    console.log("Item 6 Added");
    if (cart.indexOf("Item 6") === -1) {
        addItem("Coffee Cup", "$6.99", "Images/Cofee.png", "Item 6");
        cart.push("Item 6");
    } else {
        alert("Item already in cart");
    }
}


function addItem(name, price, imgsrc, itemIdentifier) {
    let cartRow = document.createElement("DIV");
    cartRow.classList.add("cart-row");
    cartItems.appendChild(cartRow);
    let cartColumn =document.createElement("DIV");
    cartColumn.classList.add("cart-item");
    cartColumn.classList.add("cart-column");
    cartRow.appendChild(cartColumn);
    let img =document.createElement("IMG");
    img.classList.add("cart-item-image");
    cartColumn.appendChild(img);
    img.src = imgsrc;
    let span =document.createElement("SPAN");
    span.classList.add("cart-item-title");
    cartColumn.appendChild(span);
    span.innerText = name;
    let span2 =document.createElement("SPAN");
    span2.classList.add("cart-price");
    span2.classList.add("cart-column");
    cartRow.appendChild(span2);
    span2.innerText = price;
    let quantity =document.createElement("DIV");
    quantity.classList.add("cart-quantity");
    quantity.classList.add("cart-column");
    cartRow.appendChild(quantity);
    var quantityInput =document.createElement("INPUT");
    quantityInput.classList.add("cart-quantity-input");
    quantityInput.type = "Number";
    quantityInput.value = "1";
    quantity.appendChild(quantityInput);
    let remove =document.createElement("BUTTON");
    remove.classList.add("btn");
    remove.classList.add("btn-danger");
    remove.type = "button";
    remove.innerText = "REMOVE";
    quantity.appendChild(remove);
    CalcTotal();
    quantityInput.addEventListener("change", function() {
        CalcTotal();
    })
    remove.addEventListener("click", function() {
        cartRow.remove();
        CalcTotal();
        let index = cart.indexOf(itemIdentifier);
        if (index > -1) {
            cart.splice(index, 1);
        }
    })
}

function CalcTotal() {
    let cartRows = cartItems.getElementsByClassName("cart-row");
    let total = 0;
    
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName("cart-price")[0];
        var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
        
        let price = parseFloat(priceElement.innerText.replace("$", ""));
        let quantity = quantityElement.value;
        
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    totalhtml.innerText = "$" + total;
}

let purchase = document.getElementsByClassName("btn-purchase");
purchase[0].onclick = function() {
    window.location.reload(true);
    alert("Purchase Confirmed");
}