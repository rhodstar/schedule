import Time from '../time';
import daysEnum from '../days';

const m6592 = {
  clave: 6592,
  materia: 'LAB. ANALISIS DE CIRCUITOS ELECTRICOS',
  grupos: [
    {
      profesor: 'ING. JULIA VAZQUEZ FUENTES',
      numGpo: 1,
      horarios: [{
        start: new Time(11, 30),
        end: new Time(13, 30),
        day: daysEnum.LUN,
      },
      ],
    },
    {
      profesor: 'ING. PEDRO JAVIER UBALDO SALINAS',
      numGpo: 2,
      horarios: [{
        start: new Time(16, 0),
        end: new Time(18, 0),
        day: daysEnum.LUN,
      },
      ],
    },
    {
      profesor: 'ING. MARIA DEL ROSARIO VAZQUEZ FUENTES',
      numGpo: 3,
      horarios: [{
        start: new Time(11, 30),
        end: new Time(13, 30),
        day: daysEnum.MAR,
      },
      ],
    },
    {
      profesor: 'ING. MARIA MONICA FUENTES ROMERO',
      numGpo: 4,
      horarios: [{
        start: new Time(16, 0),
        end: new Time(18, 0),
        day: daysEnum.MAR,
      },
      ],
    },
    {
      profesor: 'ING. BENJAMIN RAMIREZ HERNANDEZ',
      numGpo: 5,
      horarios: [{
        start: new Time(11, 30),
        end: new Time(13, 30),
        day: daysEnum.MIE,
      },
      ],
    },
    {
      profesor: 'ING. JULIO SERRANO VILLEGAS',
      numGpo: 6,
      horarios: [{
        start: new Time(18, 0),
        end: new Time(20, 0),
        day: daysEnum.MIE,
      },
      ],
    },
    {
      profesor: 'ING. JUAN MANUEL VELASCO MIRANDA',
      numGpo: 7,
      horarios: [{
        start: new Time(9, 15),
        end: new Time(11, 15),
        day: daysEnum.JUE,
      },
      ],
    },
    {
      profesor: 'ING. JUAN MANUEL VELASCO MIRANDA',
      numGpo: 8,
      horarios: [{
        start: new Time(16, 0),
        end: new Time(18, 0),
        day: daysEnum.JUE,
      },
      ],
    },
    {
      profesor: 'ING. MAURICIO AYALA HERNANDEZ',
      numGpo: 9,
      horarios: [{
        start: new Time(18, 0),
        end: new Time(20, 0),
        day: daysEnum.JUE,
      },
      ],
    },
    {
      profesor: 'ING. ROMAN MARIO DE LA CRUZ GOMEZ',
      numGpo: 10,
      horarios: [{
        start: new Time(20, 0),
        end: new Time(22, 0),
        day: daysEnum.JUE,
      },
      ],
    },
    {
      profesor: 'ING. JULIO SERRANO VILLEGAS',
      numGpo: 11,
      horarios: [{
        start: new Time(16, 0),
        end: new Time(18, 0),
        day: daysEnum.VIE,
      },
      ],
    },
  ],
};

export default m6592;
