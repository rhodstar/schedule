import Time from '../time';
import daysEnum from '../days';

const m6672 = {
  clave: 6672,
  materia: 'LAB. MICROCOMPUTADORAS',
  grupos: [
    {
      profesor: 'ING. MOISES MELENDEZ REYES',
      numGpo: 1,
      horarios: [
        {
          start: new Time(11, 30),
          end: new Time(13, 30),
          day: daysEnum.LUN,
        },
      ],
    },
    {
      profesor: 'ING. MOISES MELENDEZ REYES',
      numGpo: 2,
      horarios: [
        {
          start: new Time(13, 30),
          end: new Time(15, 30),
          day: daysEnum.LUN,
        },
      ],
    },
    {
      profesor: 'ING. AMARANTO DE JESUS DAVILA JAUREGUI',
      numGpo: 3,
      horarios: [
        {
          start: new Time(9, 0),
          end: new Time(11, 0),
          day: daysEnum.MAR,
        },
      ],
    },
    {
      profesor: 'M.I. RUBEN ANAYA GARCIA',
      numGpo: 4,
      horarios: [
        {
          start: new Time(11, 30),
          end: new Time(13, 30),
          day: daysEnum.MAR,
        },
      ],
    },
    {
      profesor: 'ING. MOISES MELENDEZ REYES',
      numGpo: 5,
      horarios: [
        {
          start: new Time(11, 30),
          end: new Time(13, 30),
          day: daysEnum.MIE,
        },
      ],
    },
    {
      profesor: 'DRA. LOURDES ANGELICA QUIÑONES JUAREZ',
      numGpo: 6,
      horarios: [
        {
          start: new Time(9, 0),
          end: new Time(11, 0),
          day: daysEnum.JUE,
        },
      ],
    },
    {
      profesor: 'M.I. RUBEN ANAYA GARCIA',
      numGpo: 7,
      horarios: [
        {
          start: new Time(11, 30),
          end: new Time(13, 30),
          day: daysEnum.JUE,
        },
      ],
    },
    {
      profesor: 'M.I. DIANA CRUZ HERNANDEZ',
      numGpo: 8,
      horarios: [
        {
          start: new Time(9, 0),
          end: new Time(11, 0),
          day: daysEnum.VIE,
        },
      ],
    },
    {
      profesor: 'DRA. LOURDES ANGELICA QUIÑONES JUAREZ',
      numGpo: 9,
      horarios: [
        {
          start: new Time(11, 0),
          end: new Time(13, 0),
          day: daysEnum.VIE,
        },
      ],
    },
  ],
};

export default m6672;
