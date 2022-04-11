function digitOnly() {
    var product_id = document.signup.productId.value.trim();
    if(product_id.length != 8) {
        alert("Product ID: Please enter 8 digits only.")
        return false;
    }
    return true;
}

function check() {
    return digitOnly();
} 
