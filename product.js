function digitOnly() {
    var product_id = document.signup.productId.value.trim();
    for(var i=0; i < product_id.length; i++) {
        if(product_id[i] < '0' || product_id[i] > '9'){
            document.querySelector("#error_1").removeAttribute("hidden");
            return false;
        }    
        else if(product_id.length != 8) {
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
        document.querySelector("#error_3").removeAttribute("hidden");
        return false;
    }
    for(var i=0; i < product_desc.length; i++) {
        char = product_desc[i].toUpperCase();
        if(char < 'A' || char > 'Z') {
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
    document.querySelector("#error_7").removeAttribute("hidden");
    return false;
}

function check() {
    if(digitOnly() == false || productDescription() == false || price() == false || userName() == false|| checkBox() == false) {
        return false;
    }
    return true;
} 

function showNav() {
    var nav = document.querySelector("#navigation");
    var linkA = document.createElement("a");
    var linkA1 = document.createTextNode("Home");
    linkA.setAttribute("href", "./honesty.html");
    linkA.appendChild(linkA1);
    nav.appendChild(linkA);

    var linkB = document.createElement("a");
    var linkB1 = document.createTextNode("Product");
    linkB.setAttribute("href", "./product.html");
    linkB.appendChild(linkB1);
    nav.appendChild(linkB);

    var linkC = document.createElement("a");
    var linkC1 = document.createTextNode("Reflection");
    linkC.setAttribute("href", "./reflection.html");
    linkC.appendChild(linkC1);
    nav.appendChild(linkC);

    document.querySelector("#logo").removeAttribute("onclick");
}