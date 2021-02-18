import Time from '../time';
import daysEnum from '../days';

const m1916 = {
  clave: 1916,
  materia: 'PROCESAMIENTO DIGITAL DE IMAGENES',
  grupos: [
    {
      profesor: 'DR. BORIS ESCALANTE RAMIREZ',
      numGpo: 1,
      horarios: [{
        start: new Time(11, 0),
        end: new Time(13, 0),
        day: daysEnum.MAR,
      },
      {
        start: new Time(11, 0),
        end: new Time(13, 0),
        day: daysEnum.JUE,
      },
      ],
    },
  ],
};

export default m1916;
