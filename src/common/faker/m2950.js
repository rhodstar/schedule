import Time from '../time';
import daysEnum from '../days';

const m2950 = {
  clave: 2950,
  materia: 'PROCESAMIENTO DEL LENGUAJE NATURAL',
  grupos: [
    {
      profesor: 'LIC. VICTOR MIJANGOS DE LA CRUZ',
      numGpo: 1,
      horarios: [{
        start: new Time(13, 0),
        end: new Time(14, 30),
        day: daysEnum.MAR,
      },
      {
        start: new Time(13, 0),
        end: new Time(14, 30),
        day: daysEnum.JUE,
      },
      ],
    },
  ],
};

export default m2950;
