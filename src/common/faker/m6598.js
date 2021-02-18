import Time from '../time';
import daysEnum from '../days';

const m6598 = {
  clave: 6598,
  materia: 'LAB. REDES DE DATOS SEGURAS',
  grupos: [
    {
      profesor: 'ING. MAGDALENA REYES GRANADOS',
      numGpo: 1,
      horarios: [
        {
          start: new Time(9, 0),
          end: new Time(11, 0),
          day: daysEnum.LUN,
        },
      ],
    },
    {
      profesor: 'M.C. CINTIA QUEZADA REYES',
      numGpo: 3,
      horarios: [
        {
          start: new Time(11, 0),
          end: new Time(13, 0),
          day: daysEnum.MAR,
        },
      ],
    },
    {
      profesor: 'ING. EDGAR MARTINEZ MEZA',
      numGpo: 4,
      horarios: [
        {
          start: new Time(13, 0),
          end: new Time(15, 0),
          day: daysEnum.MAR,
        },
      ],
    },
    {
      profesor: 'ING. MAGDALENA REYES GRANADOS',
      numGpo: 5,
      horarios: [
        {
          start: new Time(9, 0),
          end: new Time(11, 0),
          day: daysEnum.MIE,
        },
      ],
    },
    {
      profesor: 'M.C. CINTIA QUEZADA REYES',
      numGpo: 6,
      horarios: [
        {
          start: new Time(11, 0),
          end: new Time(13, 0),
          day: daysEnum.JUE,
        },
      ],
    },
    {
      profesor: 'ING. JOSE ANTONIO MACIAS GARCIA',
      numGpo: 2,
      horarios: [
        {
          start: new Time(18, 0),
          end: new Time(20, 0),
          day: daysEnum.LUN,
        },
      ],
    },
    {
      profesor: 'ING. JOSE ANTONIO MACIAS GARCIA',
      numGpo: 7,
      horarios: [
        {
          start: new Time(13, 0),
          end: new Time(15, 0),
          day: daysEnum.VIE,
        },
      ],
    },
  ],
};

export default m6598;
