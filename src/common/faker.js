import Time from './time';
import daysEnum from './days';

export default [
  // Materia 1
  {
    clave: 406,
    materia: 'Inteligencia Artificial',
    grupos: [
      {
        profesor: 'DR. JOSE ABEL HERRERA CAMACHO',
        numGpo: 1,
        horarios: [
          {
            start: new Time(17, 0),
            end: new Time(19, 0),
            day: daysEnum.LUN,
          },
          {
            start: new Time(17, 0),
            end: new Time(19, 0),
            day: daysEnum.MIE,
          },
        ],
      },
      {
        profesor: 'ING. JORGE ALBERTO HERNANDEZ NIETO',
        numGpo: 2,
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
        ],
      },
      {
        profesor: 'DR. GUILLERMO GILBERTO MOLERO CASTILLO',
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
            day: daysEnum.JUE,
          },
        ],
      },
    ],
  },
  // Materia 2
  {
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
    ],
  },
];
