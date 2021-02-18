import Time from '../time';
import daysEnum from '../days';

const m1590 = {
  clave: 1590,
  materia: 'COMPUTACION GRAFICA E INTERACCION HUMANO',
  grupos: [
    {
      profesor: 'ING. ARTURO PEREZ DE LA CRUZ',
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
      ],
    },
    {
      profesor: 'M.I. SERGIO TEODORO VITE',
      numGpo: 2,
      horarios: [
        {
          start: new Time(13, 0),
          end: new Time(15, 0),
          day: daysEnum.LUN,
        },
        {
          start: new Time(13, 0),
          end: new Time(15, 0),
          day: daysEnum.MIE,
        },
      ],
    },
    {
      profesor: 'ING. JOSE ROQUE ROMAN GUADARRAMA',
      numGpo: 3,
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
    {
      profesor: 'ING. CARLOS ALDAIR ROMAN BALBUENA',
      numGpo: 4,
      horarios: [
        {
          start: new Time(13, 0),
          end: new Time(15, 0),
          day: daysEnum.MAR,
        },
        {
          start: new Time(13, 0),
          end: new Time(15, 0),
          day: daysEnum.JUE,
        },
      ],
    },
    {
      profesor: 'ING. JOSE ROQUE ROMAN GUADARRAMA',
      numGpo: 5,
      horarios: [
        {
          start: new Time(11, 0),
          end: new Time(15, 0),
          day: daysEnum.VIE,
        },
      ],
    },
  ],
};

export default m1590;
