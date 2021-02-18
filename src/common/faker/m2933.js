import Time from '../time';
import daysEnum from '../days';

const m2933 = {
  clave: 2933,
  materia: 'MINERIA DE DATOS',
  grupos: [
    {
      profesor: 'DR. GUILLERMO GILBERTO MOLERO CASTILLO',
      numGpo: 1,
      horarios: [{
        start: new Time(16, 0),
        end: new Time(18, 0),
        day: daysEnum.MAR,
      },
      {
        start: new Time(16, 0),
        end: new Time(18, 0),
        day: daysEnum.JUE,
      },
      ],
    },
    {
      profesor: 'M.A. GERARDO GABRIEL CARRASCO ZUÑIGA',
      numGpo: 2,
      horarios: [{
        start: new Time(7, 0),
        end: new Time(11, 0),
        day: daysEnum.VIE,
      },
      ],
    },
  ],
};

export default m2933;
