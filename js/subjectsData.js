const sub406 = {
    clave : 406,
    grupos : [{
        gpo: 1,
        profesor : 'DR. GUILLERMO GILBERTO MOLERO CASTILLO',
        horario : '11:00 a 13:00',
        dias: 'Mar, Jue'
    },{
        gpo: 2,
        profesor : 'ING. JORGE ALBERTO HERNANDEZ NIETO',
        horario : '15:00 a 17:00',
        dias: 'Lun, Mie'
    },{
        gpo: 3,
        profesor : 'DR. ISMAEL EVERARDO BARCENAS PATIÑO',
        horario : '14:00 a 16:00',
        dias: 'Mar, Jue'
    },{
        gpo: 4,
        profesor : 'DRA. MARIA DEL CARMEN EDNA MARQUEZ MARQUEZ',
        horario : '16:00 a 18:00',
        dias: 'Mar, Jue'
    }]
}

const sub434 = {
    clave : 434,
    grupos : [{
        gpo: 1,
        profesor : 'ING. ADRIAN ULISES MERCADO MARTINEZ',
        horario : '13:00 a 15:00',
        dias: 'Lun, Mie'
    },{
        gpo: 2,
        profesor : 'ING. SERGIO VALDEZ SANCHEZ',
        horario : '16:00 a 18:00',
        dias: 'Mar, Jue'
    },{
        gpo: 3,
        profesor : 'ING. NORBERTO JESUS ORTIGOZA MARQUEZ',
        horario : '15:00 a 17:00',
        dias: 'Mar, Jue'
    }]
}

//Esto se sustituye por una consulta a la BD;
const misMaterias = [sub406,sub434]  

const searchSubject = (clave) => {
    for (let index = 0 ; index < misMaterias.length; index++ ){
        if (misMaterias[index].clave == clave)
            return index;
    }
    return -1;
}