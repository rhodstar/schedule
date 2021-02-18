import Time from '../time';
import daysEnum from '../days';

const m1672 = {
  clave: 1672,
  materia: 'MICROCOMPUTADORAS',
  grupos: [
    {
      profesor: 'M.I. RUBEN ANAYA GARCIA',
      numGpo: 1,
      horarios: [
        {
          start: new Time(8, 30),
          end: new Time(10, 0),
          day: daysEnum.LUN,
        },
        {
          start: new Time(8, 30),
          end: new Time(10, 0),
          day: daysEnum.MIE,
        },
      ],
    },
    {
      profesor: 'ING. MOISES MELENDEZ REYES',
      numGpo: 2,
      horarios: [
        {
          start: new Time(16, 0),
          end: new Time(17, 30),
          day: daysEnum.LUN,
        },
        {
          start: new Time(16, 0),
          end: new Time(17, 30),
          day: daysEnum.MIE,
        },
      ],
    },
    {
      profesor: 'M.I. JOSE ANTONIO DE JESUS ARREDONDO GARZA',
      numGpo: 3,
      horarios: [
        {
          start: new Time(7, 0),
          end: new Time(8, 30),
          day: daysEnum.MAR,
        },
        {
          start: new Time(7, 0),
          end: new Time(8, 30),
          day: daysEnum.JUE,
        },
      ],
    },
    {
      profesor: 'ING. MOISES MELENDEZ REYES',
      numGpo: 4,
      horarios: [
        {
          start: new Time(16, 0),
          end: new Time(17, 30),
          day: daysEnum.MAR,
        },
        {
          start: new Time(16, 0),
          end: new Time(17, 30),
          day: daysEnum.JUE,
        },
      ],
    },
    {
      profesor: 'M.I. ANTONIO SALVA CALLEJA',
      numGpo: 5,
      horarios: [
        {
          start: new Time(17, 30),
          end: new Time(19, 0),
          day: daysEnum.MAR,
        },
        {
          start: new Time(17, 30),
          end: new Time(19, 0),
          day: daysEnum.JUE,
        },
      ],
    },
  ],
};

export default m1672;
