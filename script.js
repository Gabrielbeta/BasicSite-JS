function load(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = '#e6d6bf'
    } else if (hora >= 12 && hora < 18 ){
        img.src = 'tarde.jpg'
        document.body.style.background = '#d29672'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background ='#07393f'
    }

    
}

