import Time from '../time';
import daysEnum from '../days';

const m6443 = {
  clave: 6443,
  materia: 'LAB. ANALISIS DE  SISTEMAS Y SEÑALES',
  grupos: [
    {
      profesor: 'M.I. ISAAC ORTEGA VELAZQUEZ',
      numGpo: 1,
      horarios: [
        {
          start: new Time(7, 0),
          end: new Time(9, 0),
          day: daysEnum.LUN,
        },
      ],
    },
    {
      profesor: 'M.I NATANAEL VIEYRA VALENCIA',
      numGpo: 2,
      horarios: [
        {
          start: new Time(11, 30),
          end: new Time(13, 30),
          day: daysEnum.LUN,
        },
      ],
    },
    {
      profesor: 'M.I NATANAEL VIEYRA VALENCIA',
      numGpo: 3,
      horarios: [
        {
          start: new Time(18, 0),
          end: new Time(20, 0),
          day: daysEnum.LUN,
        },
      ],
    },
    {
      profesor: 'DR. RAFAEL IRIARTE VIVAR-BALDERRAMA',
      numGpo: 4,
      horarios: [
        {
          start: new Time(7, 0),
          end: new Time(9, 0),
          day: daysEnum.MAR,
        },
      ],
    },
    {
      profesor: 'M.I. ALBERTO RAMIRO GARIBAY MARTINEZ',
      numGpo: 5,
      horarios: [
        {
          start: new Time(9, 15),
          end: new Time(11, 15),
          day: daysEnum.MAR,
        },
      ],
    },
    {
      profesor: 'M.I. MICHAEL JOSSUE ROJAS GARCIA',
      numGpo: 6,
      horarios: [
        {
          start: new Time(18, 0),
          end: new Time(20, 0),
          day: daysEnum.MAR,
        },
      ],
    },
    {
      profesor: 'ING. JOSE ALBERTO ARELLANO FIGUEROA',
      numGpo: 7,
      horarios: [
        {
          start: new Time(18, 0),
          end: new Time(20, 0),
          day: daysEnum.MIE,
        },
      ],
    },
    {
      profesor: 'DR. RAFAEL IRIARTE VIVAR-BALDERRAMA',
      numGpo: 8,
      horarios: [
        {
          start: new Time(7, 0),
          end: new Time(9, 0),
          day: daysEnum.JUE,
        },
      ],
    },
    {
      profesor: 'M.I. ALBERTO RAMIRO GARIBAY MARTINEZ',
      numGpo: 9,
      horarios: [
        {
          start: new Time(9, 15),
          end: new Time(11, 15),
          day: daysEnum.JUE,
        },
      ],
    },
    {
      profesor: 'ING. JOSE ALBERTO ARELLANO FIGUEROA',
      numGpo: 10,
      horarios: [
        {
          start: new Time(9, 30),
          end: new Time(11, 30),
          day: daysEnum.VIE,
        },
      ],
    },
    {
      profesor: 'M.I. MICHAEL JOSSUE ROJAS GARCIA',
      numGpo: 11,
      horarios: [
        {
          start: new Time(14, 0),
          end: new Time(16, 0),
          day: daysEnum.VIE,
        },
      ],
    },
  ],
};

export default m6443;
