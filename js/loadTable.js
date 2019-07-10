window.onload =() => {

    var initTime = new MyTime(7,0)

    var output = "";

    output += `
    <table class="table table-bordered table-sm" id="mytable">
    <thead>
      <tr>
        <th>Horario</th>
        <th>Lunes</th>
        <th>Martes</th>
        <th>Miércoles</th>
        <th>Jueves</th>
        <th>Viernes</th>
        <th>Sábado</th>
      </tr>
    </thead>
    <tbody>`;

    for (let i = 0; i < 60; i++) {
        output += `<tr><td>`;
        output+= initTime + `</td>`;
        
        initTime.sum15minutes();
        for (let j = 0; j < 6; j++) {
            output += `<td></td>`      
        }
        output += `</tr>`;
    }

    output += ` </tbody> </table>`; 
    document.getElementById("schedule-table").innerHTML = output;

}