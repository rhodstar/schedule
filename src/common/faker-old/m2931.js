import Time from '../time';
import daysEnum from '../days';

const m2931 = {
  clave: 2931,
  materia: 'NEGOCIOS ELECTRONICOS Y DESARROLLO DE PAGINAS WEB',
  grupos: [
    {
      profesor: 'M.I. ANGEL CESAR GOVANTES SALDIVAR',
      numGpo: 1,
      horarios: [
        {
          start: new Time(7, 0),
          end: new Time(9, 0),
          day: daysEnum.MAR,
        },
        {
          start: new Time(7, 0),
          end: new Time(9, 0),
          day: daysEnum.JUE,
        },
      ],
    },
    {
      profesor: 'M.I.A LUIS ARENAS HERNANDEZ',
      numGpo: 2,
      horarios: [
        {
          start: new Time(14, 0),
          end: new Time(16, 0),
          day: daysEnum.MAR,
        },
        {
          start: new Time(14, 0),
          end: new Time(16, 0),
          day: daysEnum.JUE,
        },
      ],
    },
  ],
};

export default m2931;
