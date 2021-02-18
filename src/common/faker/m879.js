import Time from '../time';
import daysEnum from '../days';

const m879 = {
  clave: 879,
  materia: 'TEORIA ELECTROMAGNETICA',
  grupos: [
    {
      profesor: 'DR. CARLOS RIVERA RIVERA',
      numGpo: 1,
      horarios: [{
        start: new Time(9, 0),
        end: new Time(11, 0),
        day: daysEnum.LUN,
      },
      {
        start: new Time(9, 0),
        end: new Time(11, 0),
        day: daysEnum.MIE,
      },
      ],
    },
    {
      profesor: 'DR. CARLOS RIVERA RIVERA',
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
      profesor: 'ING. SALVADOR TERRONES FONSECA',
      numGpo: 3,
      horarios: [{
        start: new Time(17, 45),
        end: new Time(19, 45),
        day: daysEnum.LUN,
      },
      {
        start: new Time(17, 45),
        end: new Time(19, 45),
        day: daysEnum.MIE,
      },
      ],
    },
    {
      profesor: 'ING. ALEJANDRO RAMOS AYALA',
      numGpo: 4,
      horarios: [{
        start: new Time(7, 0),
        end: new Time(9, 0),
        day: daysEnum.VIE,
      },
      {
        start: new Time(7, 0),
        end: new Time(9, 0),
        day: daysEnum.SAB,
      },
      ],
    },
    {
      profesor: 'ING. RAUL PUENTE MANCILLA',
      numGpo: 5,
      horarios: [{
        start: new Time(9, 0),
        end: new Time(13, 0),
        day: daysEnum.SAB,
      },
      ],
    },
  ],
};

export default m879;
