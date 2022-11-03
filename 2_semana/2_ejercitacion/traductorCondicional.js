let palabra = "puerta";
palabra = palabra.toLowerCase();

switch (palabra){
    case "gato":
        console.log("Cat");
        break;
    case "puerta":
        console.log("Door");
        break;
    case "ventana":
        console.log("Window");
        break;
    case "mesa":
        console.log("Table");
        break;
    default:
        console.log("Ingrese una palabra valida")
}