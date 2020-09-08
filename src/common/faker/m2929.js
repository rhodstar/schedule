import Time from '../time';
import daysEnum from '../days';

const m2929 = {
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
};

export default m2929;
