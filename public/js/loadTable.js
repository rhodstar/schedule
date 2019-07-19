window.onload =() => {
    createEmptyTable();

    let table = document.getElementById("myTable-info");

    if(table){
        let tr = table.getElementsByTagName("tr");
        for (let index = 1; index < tr.length; index++) {
            const row = tr[index].getElementsByTagName("td");
            for (let j = 0; j < row.length-2; j++) {
                const col = row[j];
                console.log(col);
            }
        }
    }

    placeSubject({
        key : 406,
        name: "INTELIGENCIA ARTIFICIAL",
        gpo: 1,
        profesor : 'DR. GUILLERMO GILBERTO MOLERO CASTILLO',
        horario_ini : new MyTime(11,0),
        horario_fin : new MyTime(13,0),
        dias: [days.Lun,days.Mar]
    });
}

const createEmptyTable = () => {
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
    document.getElementById("horario").innerHTML = output;
}

const placeSubject = (subject) => {


    let initTime = new MyTime(7,0)
    let table = document.getElementById("mytable");
    let tr = table.getElementsByTagName("tr");

    let verticalTime = timeSubtraction(subject.horario_ini,initTime);

    let subjectTime = timeSubtraction(subject.horario_fin,subject.horario_ini);

    let verticalOffset = offsetNumber(verticalTime)*4+1;
    
    let subjOffset = offsetNumber(subjectTime)*4;
    
    let td = tr[verticalOffset].getElementsByTagName("td");

    for (const dia of subject.dias) {
        td[dia].style.backgroundColor = "blue"; 
        td[dia].innerHTML =`
        <div class="p-2 text-center">
            <h6>${subject.name} </h6>
            <p>${subject.profesor} </p>
            <p>grupo ${subject.gpo} </p>
        </div>`;
        td[dia].rowSpan = subjOffset;      
    }

}

class MyTime{

    constructor(hours,minutes) {
        this.hours = hours;
        this.minutes = minutes;
    }

}

const isTimeEquals = (t1, t2) => {

    if ( t1.hours == t2.hours && 
        t1.minutes == t2.minutes)
        return true;
    return false;    
}

const timeSum = (t1,t2) => {
    let h = t1.hours + t2.hours;
    let m = t1.minutes + t2.minutes;

    if( m >= 60){
        m -= 60;
        h++;
    }
    if (h >= 24)
        h -= 24;

    return new MyTime(h,m);
}

const timeSubtraction = (time1, time2) => {
    let hours = time1.hours - time2.hours;
    let minutes = time1.minutes - time2.minutes;
    hours > 24 ? hours -= 24 : {}
    
    if (minutes < 0){
        minutes = 60 + minutes;
        hours --;
    }

    return new MyTime(hours,minutes);
}

const offsetNumber= (time) => {
    var contador = 0;
    let minutes = time.minutes;
    let hours = time.hours;
    while (hours > 0){
        minutes = time.minutes -15;
        if (minutes < 0){
            minutes = 60 + minutes;
            hours --;
        }
        contador++;
    }    
    return contador;
}

MyTime.prototype.toString = function(){
    let output = "";
    this.hours < 10 ?  output += "0" :{}
    output += this.hours + `:` ;        
    this.minutes < 10 ? output += "0" :{}
    output+= this.minutes
    return output;
}

const days = {
    Lun: 1,
    Mar: 2,
    Mie: 3,
    Jue: 4,
    Vie: 5,
    Sab: 6
}

const p_day = (day) => {
    if ( day === 1 ) return "Lun";
    if ( day === 2 ) return "Mar";
    if ( day === 3 ) return "Mie";
    if ( day === 4 ) return "Jue";
    if ( day === 5 ) return "Vie";
    if ( day === 6 ) return "Sab";

    return "";
}

const p_days = (days) => {
    let output = "";

    for (const day of days) {
        day === 1 ? output += "Lun" : {}
        day === 2 ? output += "Mar" : {}
        day === 3 ? output += "Mie" : {}
        day === 4 ? output += "Jue" : {}
        day === 5 ? output += "Vie" : {}
        day === 6 ? output += "Sab" : {}
        output += ", "
    }
    /* le quitamos los últimos 2 lugares, uno corresponde 
    al del espacio en blanco y el otro al de la coma */
    return output.slice(0,output.length-2);
}