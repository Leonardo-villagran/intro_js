function aplicarCambios() {
            
    //Selección del precio a través de su ID
    let p1 = document.querySelector('#precio')
    let p = p1.innerHTML

    //Se quita el punto del precio si este existe y se transforma a número
    let numero = p.replace(/\./g,'') 
    let precio=Number(numero)

    //Selección de la cantidad desde el input a través del id #cantidad
    let c1 = document.querySelector('#cantidad')
    let cantidad = Number(c1.value)

    //Se copia la cantidad a el span con el id #cal_cantidad
    let parrafo0 = document.querySelector('#cal_cantidad')
    parrafo0.innerHTML = cantidad
    
    //Se calcula el total a pagar al  multiplicar el precio por la cantidad
    let total = precio*cantidad

    //Se transforma el total a formato de número en español
    let esNum = new Intl.NumberFormat( 'es-ES' )
    total=esNum.format(total)

    //Se copia la cantidad a el span con el id #cal_total
    let parrafo1 = document.querySelector('#cal_total')
    parrafo1.innerHTML = total

    //Se selecciona el color ingresado en el input de id #color
    let color1=document.querySelector('#color')
    let color=color1.value

    //Se cambia el color del círculo en el span de id #cal_color
    let parrafo2 = document.querySelector('#cal_color')
    parrafo2.style.backgroundColor = color
}