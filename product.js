function digitOnly() {
    var result = true;
    var product_id = document.signup.productId.value.trim();
    for(var i=0; i < product_id.length && result == true; i++) {
        if(product_id[i] < '0' || product_id[i] > '9'){
            alert("Please enter numbers only on Product ID")
            result = false;
        }    
        else if(product_id.length != 8) {
            alert("Please enter 8 digits on Product ID")
            result = false;
        }
    }
    return result;
}

function productDescription() {
    var result = true;
    var char;
    var product_desc = document.signup.productDesc.value.trim();
    if(product_desc[0] < 'A' || product_desc[0] > 'Z') {
        alert("The product description must start with capital letters");
        result = false;
    }
    for(var i=0; i < product_desc.length && result == true; i++) {
        char = product_desc[i].toUpperCase();
        if(char < 'A' || char > 'Z') {
            alert("The product description can only have alphabets");
            result = false;
        }
    }
    return result;
}
 
function price() {
    var result = true;
    var price = document.signup.price.value;
    if(price >= 1000) {
        alert("Price should be less than 1000");
        result = false;
    }
    return result;
}

function userName() {
    var result = true;
    var user_name = document.signup.username.value;
    var char = user_name[0].toUpperCase();
    if(char < 'A' || char > 'Z') {
        alert("Username must start with alphabet");
        result = false;
    }
    return result;
}

function check() {
    var result;
    result = digitOnly();
    result = productDescription();
    result = price();
    result = userName();
    result = checkBox();
    return result;
} 
