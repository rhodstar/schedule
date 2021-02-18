import Time from '@/common/time';
import daysEnum from '@/common/days';

const myactivities = [
  {
    clave: '2947',
    grupo: 1,
    name: 'BASES DE DATOS DISTRIBUIDAS',
    profesor: 'ING. JORGE ALBERTO RODRIGUEZ CAMPOS',
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
    extras: {
      color: 'rgba(194,246,154,0.5)',
    },
  },
  {
    clave: '1672',
    grupo: 3,
    name: 'MICROCOMPUTADORAS',
    profesor: 'M.I. JOSE ANTONIO DE JESUS ARREDONDO GARZA',
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
    extras: {
      color: 'rgba(224,84,84,0.8)',
    },
  },
  {
    clave: '2080',
    grupo: 10,
    name: 'RECURSOS Y NECESIDADES DE MEXICO',
    profesor: 'M.I. JOSE AUGUSTO RAMON GONZALEZ',
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
    extras: {
      color: 'rgba(73,255,22,0.8)',
    },
  },
  {
    clave: '1055',
    grupo: 5,
    name: 'LITERATURA HISPANOAMERICANA CONTEMPORANEA',
    profesor: 'LIC. MARIA DE GUADALUPE FLOR DIAZ DE LEON FERNANDEZ DE CASTRO',
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
    extras: {
      color: 'rgba(214,255,0,0.9)',
    },
  },
  {
    clave: '2929',
    grupo: 1,
    name: 'BASES DE DATOS AVANZADAS',
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
    extras: {
      color: 'rgba(0,0,255,0.5)',
    },
  },
  {
    clave: '2932',
    grupo: 1,
    name: 'ANALISIS Y PROCESAMIENTO INTELIGENTE DE TEXTOS',
    profesor: 'M.P. OCTAVIO AUGUSTO SANCHEZ VELAZQUEZ',
    horarios: [
      {
        start: new Time(7, 0),
        end: new Time(11, 0),
        day: daysEnum.VIE,
      },
    ],
    extras: {
      color: 'rgba(235,41,187,0.7)',
    },
  },
];

export default myactivities;
