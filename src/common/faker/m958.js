import Time from '../time';
import daysEnum from '../days';

const m958 = {
  clave: 958,
  materia: 'TEMAS SELECTOS DE BASES DE DATOS',
  grupos: [
    {
      profesor: 'ING. GABRIELA BETZABE LIZARRAGA RAMIREZ',
      numGpo: 1,
      horarios: [{
        start: new Time(10, 0),
        end: new Time(11, 30),
        day: daysEnum.LUN,
      },
      {
        start: new Time(10, 0),
        end: new Time(11, 30),
        day: daysEnum.MIE,
      },
      ],
    },
  ],
};

export default m958;
