import Time from '../time';
import daysEnum from '../days';

const m558 = {
  clave: 558,
  materia: 'MEDICION E INSTRUMENTACION',
  grupos: [
    {
      profesor: 'ING. FRANCISCO HUMBERTO RODRIGUEZ Y CAYEROS',
      numGpo: 1,
      horarios: [{
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
      profesor: 'DR. ROBERTO GIOVANNI RAMIREZ CHAVARRIA',
      numGpo: 2,
      horarios: [{
        start: new Time(11, 30),
        end: new Time(13, 0),
        day: daysEnum.LUN,
      },
      {
        start: new Time(11, 30),
        end: new Time(13, 0),
        day: daysEnum.MIE,
      },
      ],
    },
    {
      profesor: 'M.I. DANIEL MARTINEZ GUTIERREZ',
      numGpo: 3,
      horarios: [{
        start: new Time(16, 0),
        end: new Time(17, 30),
        day: daysEnum.MAR,
      },
      {
        start: new Time(16, 0),
        end: new Time(17, 30),
        day: daysEnum.JUE,
      },
      ],
    },
  ],
};

export default m558;
