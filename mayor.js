do {
    var edad = prompt ("Es usted mayor de edad? (SI/NO)")
    var permiso = false
    if (edad.toLowerCase() == "si"){
        alert("Bienvenido")
       permiso = true
    }
    else if (edad.toLowerCase() == "no"){
        alert ("Entra bajo su propia responsabilidad")
        permiso = true
    }
    else{
        alert ("Ingrese una respuesta válida")
        permiso = false
       
    }

} while (permiso == false)



