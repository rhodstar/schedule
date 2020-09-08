import Time from '../time';
import daysEnum from '../days';

const m6590 = {
  clave: 6590,
  materia: 'LAB. COMPUTACION GRAFICA E INTERACCION HUMANO',
  grupos: [
    {
      profesor: 'ING. JOSE ROQUE ROMAN GUADARRAMA',
      numGpo: 1,
      horarios: [
        {
          start: new Time(11, 0),
          end: new Time(13, 0),
          day: daysEnum.LUN,
        },
      ],
    },
    {
      profesor: 'ING. LUIS SERGIO VALENCIA CASTRO',
      numGpo: 2,
      horarios: [
        {
          start: new Time(13, 0),
          end: new Time(15, 0),
          day: daysEnum.LUN,
        },
      ],
    },
    {
      profesor: 'ING. LUIS SERGIO VALENCIA CASTRO',
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
      profesor: 'ING. CARLOS ALDAIR ROMAN BALBUENA',
      numGpo: 4,
      horarios: [
        {
          start: new Time(13, 0),
          end: new Time(15, 0),
          day: daysEnum.MIE,
        },
      ],
    },
    {
      profesor: 'ING. LUIS SERGIO VALENCIA CASTRO',
      numGpo: 5,
      horarios: [
        {
          start: new Time(11, 0),
          end: new Time(13, 0),
          day: daysEnum.JUE,
        },
      ],
    },
    {
      profesor: 'ING. LUIS SERGIO VALENCIA CASTRO',
      numGpo: 6,
      horarios: [
        {
          start: new Time(15, 0),
          end: new Time(17, 0),
          day: daysEnum.JUE,
        },
      ],
    },
    {
      profesor: 'ING. JOSE ROQUE ROMAN GUADARRAMA',
      numGpo: 7,
      horarios: [
        {
          start: new Time(9, 0),
          end: new Time(11, 0),
          day: daysEnum.VIE,
        },
      ],
    },
    {
      profesor: 'ING. CARLOS ALDAIR ROMAN BALBUENA',
      numGpo: 8,
      horarios: [
        {
          start: new Time(11, 0),
          end: new Time(13, 0),
          day: daysEnum.VIE,
        },
      ],
    },
    {
      profesor: 'ING. CARLOS ALDAIR ROMAN BALBUENA',
      numGpo: 9,
      horarios: [
        {
          start: new Time(11, 0),
          end: new Time(13, 0),
          day: daysEnum.MIE,
        },
      ],
    },
  ],
};

export default m6590;
