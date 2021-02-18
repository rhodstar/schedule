import Time from '../time';
import daysEnum from '../days';

const m6867 = {
  clave: 6867,
  materia: 'LAB. ORGANIZACION Y ARQUITECTURA DE COMPUTADORAS',
  grupos: [
    {
      profesor: 'ING. JULIO CESAR CRUZ ESTRADA',
      numGpo: 1,
      horarios: [{
        start: new Time(7, 0),
        end: new Time(9, 0),
        day: daysEnum.MIE,
      },
      ],
    },
    {
      profesor: 'ING. PROFESOR POR ASIGNAR',
      numGpo: 2,
      horarios: [{
        start: new Time(9, 0),
        end: new Time(11, 0),
        day: daysEnum.JUE,
      },
      ],
    },
    {
      profesor: 'ING. ADRIAN ULISES MERCADO MARTINEZ',
      numGpo: 3,
      horarios: [{
        start: new Time(17, 0),
        end: new Time(19, 0),
        day: daysEnum.JUE,
      },
      ],
    },
    {
      profesor: 'M.I. PEDRO IGNACIO RINCON GOMEZ',
      numGpo: 4,
      horarios: [{
        start: new Time(17, 0),
        end: new Time(19, 0),
        day: daysEnum.MIE,
      },
      ],
    },
  ],
};

export default m6867;
