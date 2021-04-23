let productImgArr = document.getElementsByClassName('product');

for (let index = 0; index < productImgArr.length; index++) {
    productImgArr[index].addEventListener('click', goToProductDetails);
}

function goToProductDetails(event) {
    let productName = event.target;
    window.location = 'product.html?productName=' + productName.alt;
}




let queryString = new Array(); //[]

window.onload = function () {
    if (queryString.length == 0) {
        if (window.location.search.split('?').length > 1) {
            var params = window.location.search.split('?')[1].split('&');
            for (var i = 0; i < params.length; i++) {
                var key = params[i].split('=')[0];
                var value = decodeURIComponent(params[i].split('=')[1]);
                queryString[key] = value;
            }
        }
    }

    if (queryString['productName']) {
        document.getElementById('product-name').innerText = queryString['productName']; //Lemon
        //document.getElementById('product-img').src = './img/' + queryString['productName'].toLowerCase() + '.jpg';
        document.getElementById('product-img').src = `./img/${queryString['productName'].toLowerCase()}.jpg`;
        document.getElementById('product-img').alt = queryString['productName'];
    }
}

//-----go back button------

let goBackButton = document.getElementById('goBackButton');
if(goBackButton) {
    goBackButton.addEventListener('click', goBack);
}

function goBack(event) {
    window.history.back();
}

