window.onload =() => {

    var initTime = new MyTime(7,0);
    var endTime = new MyTime(23,0);
    var lapsus = new MyTime(0,15);

    var output = "";

    output += `
    <table class="table table-bordered table-sm" id="mytable">
    <thead><tr><th>Hora</th>`;

    
    for (let key in days) {
      output += `<th> ${p_day(days[key])} </th>`;
    }
    output += `</tr></thead><tbody>`;

    var tt = timeSubtraction(initTime,lapsus);

    do{
        output += `<tr><td>`;
        output+= initTime + `</td>`;
        
        tt = timeSum(tt,lapsus);
        initTime = timeSum(tt,lapsus);
        
        for (let j = 0; j < Object.keys(days).length; j++) {
            output += `<td></td>`      
        }
        output += `</tr>`;
        
    } while(!isTimeEquals(tt,endTime)) ;

    output += ` </tbody> </table>`; 
    document.getElementById("schedule-table").innerHTML = output;

}