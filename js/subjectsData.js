const sub406 = {
    clave : 406,
    materia: "Inteligencia Artificial",
    grupos : [{
        gpo: 1,
        profesor : 'DR. GUILLERMO GILBERTO MOLERO CASTILLO',
        horario_ini : new MyTime(11,0),
        horario_fin : new MyTime(13,0),
        dias: [days.Lun,days.Mar]
    },{
        gpo: 2,
        profesor : 'ING. JORGE ALBERTO HERNANDEZ NIETO',
        horario_ini : new MyTime(15,0),
        horario_fin : new MyTime(17,0),
        dias: [days.Lun,days.Mie]
    },{
        gpo: 3,
        profesor : 'DR. ISMAEL EVERARDO BARCENAS PATIÑO',
        horario_ini : new MyTime(14,0),
        horario_fin : new MyTime(16,0),
        dias: [days.Mar,days.Jue]
    },{
        gpo: 4,
        profesor : 'DRA. MARIA DEL CARMEN EDNA MARQUEZ MARQUEZ',
        horario_ini : new MyTime(16,0),
        horario_fin : new MyTime(18,0),
        dias: [days.Mar,days.Jue]
    }]
}

const sub434 = {
    clave : 434,
    materia: "Compiladores",
    grupos : [{
        gpo: 1,
        profesor : 'ING. ADRIAN ULISES MERCADO MARTINEZ',
        horario_ini : new MyTime(13,0),
        horario_fin : new MyTime(15,0),
        dias: [days.Lun,days.Mie]
    },{
        gpo: 2,
        profesor : 'ING. SERGIO VALDEZ SANCHEZ',
        horario_ini : new MyTime(16,0),
        horario_fin : new MyTime(18,0),
        dias: [days.Mar,days.Jue]
    },{
        gpo: 3,
        profesor : 'ING. NORBERTO JESUS ORTIGOZA MARQUEZ',
        horario_ini : new MyTime(15,0),
        horario_fin : new MyTime(17,0),
        dias: [days.Mar,days.Jue]
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
const searchSubjectName = (clave) => {
    for (let index = 0 ; index < misMaterias.length; index++ ){
        if (misMaterias[index].clave == clave)
            return misMaterias[index].materia;
    }
    return "";
}

const searchGroup= (keysub,g) => {
    for (const materia of misMaterias) {
        if (materia.clave == keysub){
            for (const grupo of materia.grupos) {
                if (grupo.gpo == g)
                    return grupo;
            }
        }
    }

    return null;
}