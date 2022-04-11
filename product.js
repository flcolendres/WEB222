function digitOnly() {
    var product_id = document.signup.productId.value.trim();
    for(var i=0; i < product_id.length; i++) {
        if(product_id[i] < '0' || product_id[i] > '9'){
            alert("Please enter numbers only on Product ID")
            document.querySelector("#error_1").removeAttribute("hidden");
            return false;
        }    
        else if(product_id.length != 8) {
            alert("Please enter 8 digits on Product ID")
            document.querySelector("#error_2").removeAttribute("hidden");
            return false;
        }
    }
    document.querySelector("#error_1").setAttribute("hidden", "hidden");
    document.querySelector("#error_2").setAttribute("hidden", "hidden");
    return true;
}

function productDescription() {
    var char;
    var product_desc = document.signup.productDesc.value.trim();
    if(product_desc[0] < 'A' || product_desc[0] > 'Z') {
        alert("The product description must start with capital letters");
        document.querySelector("#error_3").removeAttribute("hidden");
        return false;
    }
    for(var i=0; i < product_desc.length; i++) {
        char = product_desc[i].toUpperCase();
        if(char < 'A' || char > 'Z') {
            alert("The product description can only have alphabets");
            document.querySelector("#error_4").removeAttribute("hidden");
            return false;
        }
    }
    document.querySelector("#error_3").setAttribute("hidden", "hidden");
    document.querySelector("#error_4").setAttribute("hidden", "hidden");
    return true;
}
 
function price() {
    var price = document.signup.price.value;
    if(price >= 1000) {
        alert("Price should be less than 1000");
        document.querySelector("#error_5").removeAttribute("hidden");
        return false;
    }
    document.querySelector("#error_5").setAttribute("hidden", "hidden");
    return true;
}

function userName() {
    var user_name = document.signup.username.value;
    var char = user_name[0].toUpperCase();
    if(char < 'A' || char > 'Z') {
        alert("Username must start with alphabet");
        document.querySelector("#error_6").removeAttribute("hidden");
        return false;
    }
    document.querySelector("#error_6").setAttribute("hidden", "hidden");
    return true;
}

function checkBox() {
    for(var i = 0; i < document.signup.status.length; i++) {
        if(document.signup.status[i].checked == true) {
            document.querySelector("#error_7").setAttribute("hidden", "hidden");
            return true;
        }
    }
    alert("Select at least one of the checkboxes.");
    document.querySelector("#error_7").removeAttribute("hidden");
    return false;
}

function check() {
    if(digitOnly() == false || productDescription() == false || price() == false || userName() == false|| checkBox() == false) {
        return false;
    }
    return true;
} 
