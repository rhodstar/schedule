import Time from '../time';
import daysEnum from '../days';

const m2930 = {
  clave: 2930,
  materia: 'CRIPTOGRAFIA',
  grupos: [
    {
      profesor: 'M.I. ALEJANDRO PADRON GODINEZ',
      numGpo: 1,
      horarios: [{
        start: new Time(13, 0),
        end: new Time(15, 0),
        day: daysEnum.LUN,
      },
      {
        start: new Time(13, 0),
        end: new Time(15, 0),
        day: daysEnum.MIE,
      },
      ],
    },
    {
      profesor: 'DRA. ROCIO ALEJANDRA ALDECO PEREZ',
      numGpo: 2,
      horarios: [{
        start: new Time(13, 0),
        end: new Time(15, 0),
        day: daysEnum.MAR,
      },
      {
        start: new Time(13, 0),
        end: new Time(15, 0),
        day: daysEnum.JUE,
      },
      ],
    },
    {
      profesor: 'ING. MAGDALENA REYES GRANADOS',
      numGpo: 3,
      horarios: [{
        start: new Time(7, 0),
        end: new Time(11, 0),
        day: daysEnum.VIE,
      },
      ],
    },
  ],
};

export default m2930;
