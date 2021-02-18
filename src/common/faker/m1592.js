import Time from '../time';
import daysEnum from '../days';

const m1592 = {
  clave: 1592,
  materia: 'ANALISIS DE CIRCUITOS ELECTRICOS',
  grupos: [
    {
      profesor: 'DR. JAIME BALTAZAR MORALES SANDOVAL',
      numGpo: 2,
      horarios: [{
        start: new Time(14, 0),
        end: new Time(16, 0),
        day: daysEnum.LUN,
      },
      {
        start: new Time(14, 0),
        end: new Time(16, 0),
        day: daysEnum.MIE,
      },
      ],
    },
    {
      profesor: 'M.I. GERMAN JORGE CARMONA PAREDES',
      numGpo: 3,
      horarios: [{
        start: new Time(7, 0),
        end: new Time(9, 0),
        day: daysEnum.MAR,
      },
      {
        start: new Time(7, 0),
        end: new Time(9, 0),
        day: daysEnum.JUE,
      },
      ],
    },
    {
      profesor: 'ING. VICTOR MANUEL SANCHEZ ESQUIVEL',
      numGpo: 4,
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
      profesor: 'M.I. LUIS ANTONIO ALTAMIRANO YEPEZ',
      numGpo: 5,
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

export default m1592;
