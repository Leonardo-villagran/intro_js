function aplicarCambios() {
            
    p1 = document.querySelector('#precio')
    p = p1.innerHTML
    tuVariable = p.replace(/\./g,'') 
    p=Number(tuVariable)

    c1 = document.querySelector('#cantidad')
    c = Number(c1.value)
    parrafo0 = document.querySelector('#cal_cantidad')
    parrafo0.innerHTML = c
    total = p*c

    esNum = new Intl.NumberFormat( 'es-ES' )
    total=esNum.format( total)

    parrafo = document.querySelector('#cal_total')
    parrafo.innerHTML = total

    color1=document.querySelector('#color')
    color=color1.value

    parrafo2 = document.querySelector('#cal_color')
    parrafo2.style.backgroundColor = color
}