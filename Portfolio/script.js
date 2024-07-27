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



var typed = new Typed('.auto-typing', {
    strings: ["Full Stack Developer !", "Quick Learner...", "Software Developer", "Problem Solver"],
    typeSpeed: 50,
    backSpeed : 50, 
    loop : true
  });