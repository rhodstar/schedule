import Time from '../time';
import daysEnum from '../days';

const m2957 = {
  clave: 2957,
  materia: 'TEMAS SELECTOS DE INGENIERIA EN COMPUTACION II',
  grupos: [
    {
      profesor: 'ING. EDUARDO DANIEL GUERRERO RAMIREZ',
      numGpo: 1,
      horarios: [{
        start: new Time(7, 0),
        end: new Time(10, 0),
        day: daysEnum.VIE,
      },
      ],
    },
    {
      profesor: 'M.I. SERGIO TEODORO VITE',
      numGpo: 2,
      horarios: [{
        start: new Time(16, 30),
        end: new Time(18, 0),
        day: daysEnum.LUN,
      },
      {
        start: new Time(16, 30),
        end: new Time(18, 0),
        day: daysEnum.MIE,
      },
      ],
    },
  ],
};

export default m2957;
