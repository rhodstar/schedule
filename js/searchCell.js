const searchCell = (k,g) => {

    let grupo = searchGroup(k,g);

    let materia = searchSubjectName(k);

    let initTime = new MyTime(7,0)
    let table = document.getElementById("mytable");
    let tr = table.getElementsByTagName("tr");

    let verticalTime = timeSubtraction(grupo.horario_ini,initTime);

    let subjectTime = timeSubtraction(grupo.horario_fin,grupo.horario_ini);

    let verticalOffset = offsetNumber(verticalTime)*4+1;
    
    let subjOffset = offsetNumber(subjectTime)*4;
    
    let td = tr[verticalOffset].getElementsByTagName("td");

    for (const dia of grupo.dias) {
        td[dia].style.backgroundColor = "blue"; 
        td[dia].innerHTML =`
        <div class="p-2 text-center">
            <h6>${materia} </h6>
            <p>${grupo.profesor} </p>
            <p>grupo ${grupo.gpo} </p>
        </div>`;
        
        td[dia].rowSpan = subjOffset;      
    }

}