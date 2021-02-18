import Time from '../time';
import daysEnum from '../days';

const m2952 = {
  clave: 2952,
  materia: 'PROYECTO DE  INVESTIGACION DE INGENIERIA EN COMPUTACION',
  grupos: [
    {
      profesor: 'DR. GUILLERMO GILBERTO MOLERO CASTILLO',
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

export default m2952;
