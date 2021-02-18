import Time from '../time';
import daysEnum from '../days';

const m1867 = {
  clave: 1867,
  materia: 'ORGANIZACION Y ARQUITECTURA DE COMPUTADORAS',
  grupos: [
    {
      profesor: 'ING. JULIO CESAR CRUZ ESTRADA',
      numGpo: 2,
      horarios: [{
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
    },
    {
      profesor: 'ING. HUGO ENRIQUE ESTRADA LEON',
      numGpo: 3,
      horarios: [{
        start: new Time(7, 0),
        end: new Time(8, 30),
        day: daysEnum.LUN,
      },
      {
        start: new Time(7, 0),
        end: new Time(8, 30),
        day: daysEnum.MIE,
      },
      ],
    },
    {
      profesor: 'M.I. PEDRO IGNACIO RINCON GOMEZ',
      numGpo: 4,
      horarios: [{
        start: new Time(19, 0),
        end: new Time(20, 30),
        day: daysEnum.LUN,
      },
      {
        start: new Time(19, 0),
        end: new Time(20, 30),
        day: daysEnum.MIE,
      },
      ],
    },
    {
      profesor: 'M.I. JOSE LUIS CRUZ MORA',
      numGpo: 5,
      horarios: [{
        start: new Time(10, 0),
        end: new Time(13, 0),
        day: daysEnum.SAB,
      },
      ],
    },
  ],
};

export default m1867;
