//if ("0"){
  //  alert('Hello');
//}// Se lanzara el mensaje porque la String no esta vacia

let value = prompt('Cual es el nombre de JavaScript?', '');
if (value == 'ECMAScript'){
    alert('Correcto');
} else{
    alert("No sabes? ECMAScript");
}

alert value2 = prompt('Escribe el número', '');
if(value2>0){
    alert(1)
}else if(value<0){
    alert(-1)
}else{
    alert(0)
}

let result = (a+b<4) ? 'Debajo' : 'Encima';

let message =(login == 'Empleado') ? 'Hola' : (login =='Director') ? 'Felicidades' : (login == '') ? 'Sin sesión': '';