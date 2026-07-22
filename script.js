const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".popup-img").forEach(img => {

    img.addEventListener("click", function(){

        modal.style.display = "flex";

        modalImg.src = this.src;

    });

});

document.querySelector(".close").addEventListener("click", function(){

    modal.style.display = "none";

});

modal.addEventListener("click", function(e){

    if(e.target === modal){

        modal.style.display = "none";

    }

});