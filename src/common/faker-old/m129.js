import Time from '../time';
import daysEnum from '../days';

const m129 = {
  clave: 129,
  materia: 'DINAMICA DE SISTEMAS FISICOS',
  grupos: [
    {
      profesor: 'M.I. GERMAN JORGE CARMONA PAREDES',
      numGpo: 1,
      horarios: [
        {
          start: new Time(18, 0),
          end: new Time(20, 0),
          day: daysEnum.LUN,
        },
        {
          start: new Time(18, 0),
          end: new Time(20, 0),
          day: daysEnum.MIE,
        },
      ],
    },
    {
      profesor: 'DRA. FLOR LIZETH TORRES ORTIZ',
      numGpo: 2,
      horarios: [
        {
          start: new Time(11, 30),
          end: new Time(13, 30),
          day: daysEnum.LUN,
        },
        {
          start: new Time(11, 30),
          end: new Time(13, 30),
          day: daysEnum.MIE,
        },
      ],
    },
    {
      profesor: 'M.I. LUIS ROBERTO VEGA GONZALEZ',
      numGpo: 3,
      horarios: [
        {
          start: new Time(14, 0),
          end: new Time(16, 0),
          day: daysEnum.LUN,
        },
        {
          start: new Time(14, 0),
          end: new Time(16, 0),
          day: daysEnum.MIE,
        },
      ],
    },
    {
      profesor: 'ING. ROLANDO PERALTA PEREZ',
      numGpo: 4,
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
  ],
};

export default m129;
