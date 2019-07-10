const searchCell = ()=>{
    let grupo = {
        gpo: 1,
        profesor : 'ING. ADRIAN ULISES MERCADO MARTINEZ',
        horario_ini : new MyTime(13,0),
        horario_fin : new MyTime(15,0),
        dias: [days.Lun,days.Mie]
    }

    let materia = "Compiladores";

    placeSubject(materia,grupo);
}
const placeSubject = (materia,grupo)=>{
    let initTime = new MyTime(7,0)
    let table = document.getElementById("mytable");
    let tr = table.getElementsByTagName("tr");
    

    let verticalTime = timeSubtraction(grupo.horario_ini,initTime);
    console.log(verticalTime);

    let subjectTime = timeSubtraction(grupo.horario_fin,grupo.horario_ini);
    console.log(subjectTime);

    let verticalOffset = offsetNumber(verticalTime)*4+1;
    
    let subjOffset = offsetNumber(subjectTime)*4;
    
    console.log(subjOffset);

    let td = tr[verticalOffset].getElementsByTagName("td");

    for (const dia of grupo.dias) {
        td[dia].innerHTML =`
        <h5>`+ materia +`</h5>
        grupo: `+ grupo.gpo;
        
        td[dia].rowSpan = subjOffset;      
    }

}