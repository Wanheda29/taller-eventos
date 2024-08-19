
let boton = document.getElementById('buttonDiv');
let innerButton = document.getElementById('innerButton');

innerButton.addEventListener("click", function(evt){
   evt.stopImmediatePropagation();
});


boton.addEventListener("click", function(){
    alert("Hola! Soy el div");
});

