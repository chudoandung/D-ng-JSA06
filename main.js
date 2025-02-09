function searchProduct(){
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll("#productlist li")

    items.forEach(function (item){
        let productName = item.className.toLowerCase();
        if ( productName.includes(input)){
            item.style.display = "";
        }
        else{
            item.style.display = "none";
        }
    })
}
