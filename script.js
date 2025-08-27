//Increment hearts
const hearts = document.querySelectorAll(".heart-icon");
const life = document.getElementById("life-inc");
hearts.forEach(function(heart){
    heart.addEventListener("click", function(){
        life.textContent = parseInt(life.textContent)+1;
    });
});

