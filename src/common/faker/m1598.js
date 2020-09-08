import Time from '../time';
import daysEnum from '../days';

const m1598 = {
  clave: 1598,
  materia: 'REDES DE DATOS SEGURAS',
  grupos: [
    {
      profesor: 'M.C. CINTIA QUEZADA REYES',
      numGpo: 1,
      horarios: [
        {
          start: new Time(11, 0),
          end: new Time(13, 0),
          day: daysEnum.LUN,
        },
        {
          start: new Time(11, 0),
          end: new Time(13, 0),
          day: daysEnum.MIE,
        },
        {
          start: new Time(11, 0),
          end: new Time(13, 0),
          day: daysEnum.VIE,
        },
      ],
    },
    {
      profesor: 'ING. MAGDALENA REYES GRANADOS',
      numGpo: 2,
      horarios: [
        {
          start: new Time(16, 0),
          end: new Time(18, 0),
          day: daysEnum.LUN,
        },
        {
          start: new Time(16, 0),
          end: new Time(18, 0),
          day: daysEnum.MAR,
        },
        {
          start: new Time(16, 0),
          end: new Time(18, 0),
          day: daysEnum.MIE,
        },
      ],
    },
    {
      profesor: 'M.C. MARIA JAQUELINA LOPEZ BARRIENTOS',
      numGpo: 3,
      horarios: [
        {
          start: new Time(11, 0),
          end: new Time(13, 0),
          day: daysEnum.MAR,
        },
        {
          start: new Time(11, 0),
          end: new Time(13, 0),
          day: daysEnum.MIE,
        },
        {
          start: new Time(11, 0),
          end: new Time(13, 0),
          day: daysEnum.JUE,
        },
      ],
    },
    {
      profesor: 'ING. EDGAR MARTINEZ MEZA',
      numGpo: 4,
      horarios: [
        {
          start: new Time(18, 0),
          end: new Time(20, 0),
          day: daysEnum.MAR,
        },
        {
          start: new Time(18, 0),
          end: new Time(20, 0),
          day: daysEnum.MIE,
        },
        {
          start: new Time(18, 0),
          end: new Time(20, 0),
          day: daysEnum.JUE,
        },
      ],
    },
    {
      profesor: 'ING. JESÚS VALLEJO GONZÁLEZ',
      numGpo: 7,
      horarios: [
        {
          start: new Time(15, 0),
          end: new Time(17, 0),
          day: daysEnum.LUN,
        },
        {
          start: new Time(15, 0),
          end: new Time(17, 0),
          day: daysEnum.MIE,
        },
        {
          start: new Time(15, 0),
          end: new Time(17, 0),
          day: daysEnum.VIE,
        },
      ],
    },
    {
      profesor: 'ING. JOSE ANTONIO MACIAS GARCIA',
      numGpo: 5,
      horarios: [
        {
          start: new Time(7, 0),
          end: new Time(13, 0),
          day: daysEnum.VIE,
        },
      ],
    },
    {
      profesor: 'ING. JOSE ANTONIO MACIAS GARCIA',
      numGpo: 6,
      horarios: [
        {
          start: new Time(16, 0),
          end: new Time(18, 0),
          day: daysEnum.LUN,
        },
        {
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
  ],
};

export default m1598;
