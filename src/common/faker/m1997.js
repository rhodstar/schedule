import Time from '../time';
import daysEnum from '../days';

const m1997 = {
  clave: 1997,
  materia: 'FUNDAMENTOS DE CONTROL',
  grupos: [
    {
      profesor: 'DRA. SOFIA MAGDALENA AVILA BECERRIL',
      numGpo: 1,
      horarios: [{
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
      profesor: 'DR. MARCO ANTONIO ARTEAGA PEREZ',
      numGpo: 2,
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
      profesor: 'DR. LEONID FRIDMAN GOLDREICH',
      numGpo: 3,
      horarios: [{
        start: new Time(11, 30),
        end: new Time(13, 30),
        day: daysEnum.MAR,
      },
      {
        start: new Time(11, 30),
        end: new Time(13, 30),
        day: daysEnum.JUE,
      },
      ],
    },
    {
      profesor: 'M.I. ROLANDO ALBERTO CARRERA MENDEZ',
      numGpo: 4,
      horarios: [{
        start: new Time(14, 0),
        end: new Time(16, 0),
        day: daysEnum.MAR,
      },
      {
        start: new Time(14, 0),
        end: new Time(16, 0),
        day: daysEnum.JUE,
      },
      ],
    },
  ],
};

export default m1997;
