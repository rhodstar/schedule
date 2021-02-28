import Time from '../time';
import daysEnum from '../days';

const m1999 = {
  clave: 1999,
  materia: 'SISTEMAS DE COMUNICACIONES ELECTRONICAS',
  grupos: [
    {
      profesor: 'M.I. JUAN FERNANDO SOLORZANO PALOMARES',
      numGpo: 2,
      horarios: [{
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
      profesor: 'M.I. ADAN BONILLA CHAVEZ',
      numGpo: 1,
      horarios: [{
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
    {
      profesor: 'M.I. BENJAMIN VALERA OROZCO',
      numGpo: 3,
      horarios: [{
        start: new Time(9, 15),
        end: new Time(11, 15),
        day: daysEnum.MAR,
      },
      {
        start: new Time(9, 15),
        end: new Time(11, 15),
        day: daysEnum.JUE,
      },
      ],
    },
    {
      profesor: 'M.I. MARIO ALBERTO HERNANDEZ FLORES',
      numGpo: 4,
      horarios: [{
        start: new Time(18, 0),
        end: new Time(20, 0),
        day: daysEnum.MAR,
      },
      {
        start: new Time(18, 0),
        end: new Time(20, 0),
        day: daysEnum.JUE,
      },
      ],
    },
  ],
};

export default m1999;
