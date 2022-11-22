function aplicarCambios() {
            
    //Selección del precio a través de su ID
    p1 = document.querySelector('#precio')
    p = p1.innerHTML

    //Se quita el punto del precio si este existe y se transforma a número
    numero = p.replace(/\./g,'') 
    precio=Number(numero)

    //Selección de la cantidad desde el input a través del id #cantidad
    c1 = document.querySelector('#cantidad')
    cantidad = Number(c1.value)

    //Se copia la cantidad a el span con el id #cal_cantidad
    parrafo0 = document.querySelector('#cal_cantidad')
    parrafo0.innerHTML = cantidad
    
    //Se calcula el total a pagar al  multiplicar el precio por la cantidad
    total = precio*cantidad

    //Se transforma el total a formato de número en español
    esNum = new Intl.NumberFormat( 'es-ES' )
    total=esNum.format(total)

    //Se copia la cantidad a el span con el id #cal_total
    parrafo1 = document.querySelector('#cal_total')
    parrafo1.innerHTML = total

    //Se selecciona el color ingresado en el input de id #color
    color1=document.querySelector('#color')
    color=color1.value

    //Se cambia el color del círculo en el span de id #cal_color
    parrafo2 = document.querySelector('#cal_color')
    parrafo2.style.backgroundColor = color
}