import Time from '../time';
import daysEnum from '../days';

const m2947 = {
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
};

export default m2947;
