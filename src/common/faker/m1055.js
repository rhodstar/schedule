import Time from '../time';
import daysEnum from '../days';

const m1055 = {
  clave: 1055,
  materia: 'LITERATURA HISPANOAMERICANA CONTEMPORANEA',
  grupos: [
    {
      profesor: 'LIC. MARIA DE GUADALUPE FLOR DIAZ DE LEON FERNANDEZ DE CASTRO',
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
};

export default m1055;
