import Time from '../time';
import daysEnum from '../days';

const m2958 = {
  clave: 2958,
  materia: 'TEMAS SELECTOS DE INGENIERIA EN COMPUTACION III',
  grupos: [
    {
      profesor: 'ING. ARTURO PEREZ DE LA CRUZ',
      numGpo: 2,
      horarios: [{
        start: new Time(13, 0),
        end: new Time(15, 0),
        day: daysEnum.LUN,
      },
      {
        start: new Time(13, 0),
        end: new Time(15, 0),
        day: daysEnum.MIE,
      },
      ],
    },
    {
      profesor: 'ING. JOSE ANTONIO MACIAS GARCIA',
      numGpo: 1,
      horarios: [{
        start: new Time(7, 0),
        end: new Time(9, 0),
        day: daysEnum.LUN,
      },
      {
        start: new Time(7, 0),
        end: new Time(9, 0),
        day: daysEnum.MIE,
      },
      ],
    },
    {
      profesor: 'ING. JOSE ANTONIO MACIAS GARCIA',
      numGpo: 3,
      horarios: [{
        start: new Time(13, 0),
        end: new Time(15, 0),
        day: daysEnum.LUN,
      },
      {
        start: new Time(13, 0),
        end: new Time(15, 0),
        day: daysEnum.JUE,
      },
      ],
    },
  ],
};

export default m2958;
