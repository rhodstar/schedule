import Time from '../time';
import daysEnum from '../days';

const m5558 = {
  clave: 5558,
  materia: 'LAB. MEDICION E INSTRUMENTACION',
  grupos: [
    {
      profesor: 'ING. JAVIER GONZALEZ PRADO',
      numGpo: 1,
      horarios: [{
        start: new Time(18, 0),
        end: new Time(20, 0),
        day: daysEnum.LUN,
      },
      ],
    },
    {
      profesor: 'ING. JUAN MANUEL BARBOSA CASTILLO',
      numGpo: 2,
      horarios: [{
        start: new Time(9, 15),
        end: new Time(11, 15),
        day: daysEnum.MAR,
      },
      ],
    },
    {
      profesor: 'ING. JOSE ALBERTO ARELLANO FIGUEROA',
      numGpo: 3,
      horarios: [{
        start: new Time(11, 30),
        end: new Time(13, 30),
        day: daysEnum.MAR,
      },
      ],
    },
    {
      profesor: 'ING. JAVIER GONZALEZ PRADO',
      numGpo: 4,
      horarios: [{
        start: new Time(18, 0),
        end: new Time(20, 0),
        day: daysEnum.MIE,
      },
      ],
    },
    {
      profesor: 'ING. EDUARDO HERNANDEZ ROMERO',
      numGpo: 5,
      horarios: [{
        start: new Time(9, 15),
        end: new Time(11, 15),
        day: daysEnum.JUE,
      },
      ],
    },
    {
      profesor: 'ING. EDUARDO HERNANDEZ ROMERO',
      numGpo: 6,
      horarios: [{
        start: new Time(11, 30),
        end: new Time(13, 30),
        day: daysEnum.JUE,
      },
      ],
    },
    {
      profesor: 'ING. ROMAN MARIO DE LA CRUZ GOMEZ',
      numGpo: 7,
      horarios: [{
        start: new Time(18, 0),
        end: new Time(20, 0),
        day: daysEnum.JUE,
      },
      ],
    },
    {
      profesor: 'ING. JUAN MANUEL BARBOSA CASTILLO',
      numGpo: 8,
      horarios: [{
        start: new Time(9, 15),
        end: new Time(11, 15),
        day: daysEnum.VIE,
      },
      ],
    },
    {
      profesor: 'ING. ABEL VILLANUEVA PEÑA',
      numGpo: 9,
      horarios: [{
        start: new Time(11, 30),
        end: new Time(13, 30),
        day: daysEnum.VIE,
      },
      ],
    },
    {
      profesor: 'ING. JAVIER GONZALEZ PRADO',
      numGpo: 10,
      horarios: [{
        start: new Time(18, 0),
        end: new Time(20, 0),
        day: daysEnum.VIE,
      },
      ],
    },
  ],
};

export default m5558;
