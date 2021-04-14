



const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function(){
   
    // if(links.classList.contains("show-links"){
    //     links.classList.remove("show-links")
    // }else{
    //     links.classList.add("show-links")
    // }
    // })

    // Conseguimos los mismo con toggle pero en lugar de hacerlo en 5 
    // lineas lo hacemos en 1:

        links.classList.toggle("show-links");
})