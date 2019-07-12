const loadSubjects = ()=>{
    const keysub = document.getElementById("subjectkey").value;   
    indexSubject = searchSubject(keysub);
    var output = ""; 

    if( indexSubject != -1){
        for (const grupo of misMaterias[indexSubject].grupos) {
            output += `
            <div class="card border-primary">
            <div class="card-body">
            <div class="row">
                <div class="col-md-8">
                    <p class="card-text"> <b>Gpo.`;
            output += grupo.gpo+ `</b> `+ grupo.profesor+ `</p>
                </div>
                <div class="col-md-4 text-right">
                <button class="btn btn-primary mb-2" type="button" onclick="searchCell(`+keysub+`,`+grupo.gpo+`)" id="">Agregar</button>
                </div>
            </div>
            <p class="card-text"><b>`;
            output +=`Horario:</b> ` + grupo.horario_ini +` a ` +grupo.horario_fin + `&nbsp; <b>Días: </b>` + p_days(grupo.dias) +`</p></div></div>`;
        }  
    }else{
        output += `
        <div class="alert alert-warning" role="alert">`
            + keysub + ` is not in our database yet or is not a valid key </div>`;
    }
    document.getElementById("list-subjects").innerHTML = output;  
}