import Time from './time';
import daysEnum from './days';

export default [
  // MICROCOMPUTADORAS (1672)
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
  // BASES DE DATOS DISTRIBUIDAS (2947)
  {
    clave: 2947,
    materia: 'BASES DE DATOS DISTRIBUIDAS',
    grupos: [
      {
        profesor: 'ING. JORGE ALBERTO RODRIGUEZ CAMPOS',
        numGpo: 1,
        horarios: [
          {
            start: new Time(9, 0),
            end: new Time(11, 0),
            day: daysEnum.MAR,
          },
          {
            start: new Time(9, 0),
            end: new Time(11, 0),
            day: daysEnum.JUE,
          },
        ],
      },
    ],
  },
  // LITERATURA HISPANOAMERICANA CONTEMPORANEA (1055)
  {
    clave: 1055,
    materia: 'LITERATURA HISPANOAMERICANA CONTEMPORANEA',
    grupos: [
      {
        profesor:
          'LIC. MARIA DE GUADALUPE FLOR DIAZ DE LEON FERNANDEZ DE CASTRO',
        numGpo: 5,
        horarios: [
          {
            start: new Time(9, 0),
            end: new Time(11, 0),
            day: daysEnum.LUN,
          },
          {
            start: new Time(9, 0),
            end: new Time(11, 0),
            day: daysEnum.MIE,
          },
        ],
      },
    ],
  },
  // BASES DE DATOS AVANZADAS (2929)
  {
    clave: 2929,
    materia: 'BASES DE DATOS AVANZADAS',
    grupos: [
      {
        numGpo: 1,
        profesor: 'ING. JORGE ALBERTO RODRIGUEZ CAMPOS',
        horarios: [
          {
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
    ],
  },
  // ANALISIS Y PROCESAMIENTO INTELIGENTE DE TEXTOS (2932)
  {
    clave: 2932,
    materia: 'ANALISIS Y PROCESAMIENTO INTELIGENTE DE TEXTOS',
    grupos: [
      {
        numGpo: 1,
        profesor: 'M.P. OCTAVIO AUGUSTO SANCHEZ VELAZQUEZ',
        horarios: [
          {
            start: new Time(7, 0),
            end: new Time(11, 0),
            day: daysEnum.VIE,
          },
        ],
      },
    ],
  },
];
