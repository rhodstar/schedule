import Time from '../time';
import daysEnum from '../days';

const m757 = {
  clave: 757,
  materia: 'RECONOCIMIENTO DE PATRONES',
  grupos: [
    {
      profesor: 'DRA. JIMENA OLVERES MONTIEL',
      numGpo: 1,
      horarios: [{
        start: new Time(11, 30),
        end: new Time(13, 0),
        day: daysEnum.LUN,
      },
      {
        start: new Time(11, 30),
        end: new Time(13, 0),
        day: daysEnum.MIE,
      },
      ],
    },
    {
      profesor: 'DR. JESUS SAVAGE CARMONA',
      numGpo: 2,
      horarios: [{
        start: new Time(16, 0),
        end: new Time(17, 30),
        day: daysEnum.LUN,
      },
      {
        start: new Time(16, 0),
        end: new Time(17, 30),
        day: daysEnum.MIE,
      },
      ],
    },
  ],
};

export default m757;
