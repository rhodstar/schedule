import Time from '../time';
import daysEnum from '../days';

const m6997 = {
  clave: 6997,
  materia: 'LAB. FUNDAMENTOS DE CONTROL',
  grupos: [
    {
      profesor: 'ING. JESUS YAÑEZ GUTIERREZ',
      numGpo: 1,
      horarios: [{
        start: new Time(7, 0),
        end: new Time(9, 0),
        day: daysEnum.LUN,
      },
      ],
    },
    {
      profesor: 'M.I. DANIEL MARTINEZ GUTIERREZ',
      numGpo: 2,
      horarios: [{
        start: new Time(11, 30),
        end: new Time(13, 30),
        day: daysEnum.MAR,
      },
      ],
    },
    {
      profesor: 'M.C. MINERVA RUTH HERRERA RODRIGUEZ',
      numGpo: 3,
      horarios: [{
        start: new Time(16, 0),
        end: new Time(18, 0),
        day: daysEnum.MAR,
      },
      ],
    },
    {
      profesor: 'ING. ADRIANA EUGENIA CHAVIRA DIAZ',
      numGpo: 4,
      horarios: [{
        start: new Time(11, 30),
        end: new Time(13, 30),
        day: daysEnum.JUE,
      },
      ],
    },
    {
      profesor: 'ING. MAURO GILBERTO LOPEZ RODRIGUEZ',
      numGpo: 5,
      horarios: [{
        start: new Time(16, 0),
        end: new Time(18, 0),
        day: daysEnum.JUE,
      },
      ],
    },
    {
      profesor: 'ING. JESUS YAÑEZ GUTIERREZ',
      numGpo: 6,
      horarios: [{
        start: new Time(18, 0),
        end: new Time(20, 0),
        day: daysEnum.JUE,
      },
      ],
    },
    {
      profesor: 'ING. GUSTAVO GARCIA SANCHEZ',
      numGpo: 7,
      horarios: [{
        start: new Time(7, 0),
        end: new Time(9, 0),
        day: daysEnum.VIE,
      },
      ],
    },
    {
      profesor: 'M.C. EDGAR  BALDEMAR AGUADO CRUZ',
      numGpo: 8,
      horarios: [{
        start: new Time(9, 15),
        end: new Time(11, 15),
        day: daysEnum.VIE,
      },
      ],
    },
  ],
};

export default m6997;
