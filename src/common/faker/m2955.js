import Time from '../time';
import daysEnum from '../days';

const m2955 = {
  clave: 2955,
  materia: 'SEMINARIO DE TITULACION PARA INGENIEROS EN COMPUTACION',
  grupos: [
    {
      profesor: 'ING. NOE DE JESUS ROMERO SERRANO',
      numGpo: 1,
      horarios: [{
        start: new Time(8, 30),
        end: new Time(10, 0),
        day: daysEnum.LUN,
      },
      {
        start: new Time(8, 30),
        end: new Time(10, 0),
        day: daysEnum.MIE,
      },
      ],
    },
    {
      profesor: 'ING. ALBERTO TEMPLOS CARBAJAL',
      numGpo: 2,
      horarios: [{
        start: new Time(11, 30),
        end: new Time(13, 0),
        day: daysEnum.MAR,
      },
      {
        start: new Time(11, 30),
        end: new Time(13, 0),
        day: daysEnum.JUE,
      },
      ],
    },
    {
      profesor: 'ING. ORLANDO ZALDIVAR ZAMORATEGUI',
      numGpo: 3,
      horarios: [{
        start: new Time(16, 0),
        end: new Time(17, 30),
        day: daysEnum.MAR,
      },
      {
        start: new Time(16, 0),
        end: new Time(17, 30),
        day: daysEnum.JUE,
      },
      ],
    },
  ],
};

export default m2955;
