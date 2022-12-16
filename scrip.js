//algoritmo con un condicional, ciclo y función.
//aplicar codigo de descuento y hacer la operación
for (let i=1;i<=5;i++){
     let Codigo= prompt("ingresa código de descuento");

     if(Codigo==543){
        alert("bienvenido a la promoción de un bono de 30000");
        break;
        }
        else{
            alert("este código no es valido"); } }
 

function AplicarDescuento(precio){
    let descuento= precioArti - 30000;
    alert("el precio total con descuento es $"+ descuento)

}
let precioArti=parseFloat(prompt("ingresa precio del articulo"));
AplicarDescuento(precioArti);