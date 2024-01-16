let bar = document.getElementById("icon-bar")





let ul = document.querySelector("ul");

bar.addEventListener("click", function(){
    ul.classList.toggle("showData");

    if(ul.className == "showData"){
        bar.className = "fas fa-xmark";
        
    }else{
        bar.className="fas fa-bars"
    }

})