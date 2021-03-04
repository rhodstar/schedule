import Time from '../time';
import daysEnum from '../days';

const m1780 = {
  clave: 1780,
  materia: 'ACUSTICA Y OPTICA',
  grupos: [
    {
      profesor: 'MC. LUIS ENRIQUE QUINTANAR CORTES',
      numGpo: 2,
      horarios: [{
        start: new Time(11, 0),
        end: new Time(13, 0),
        day: daysEnum.MAR,
      },
      {
        start: new Time(11, 0),
        end: new Time(13, 0),
        day: daysEnum.JUE,
      },
      {
        start: new Time(11, 0),
        end: new Time(13, 0),
        day: daysEnum.MIE,
      },
      ],
    },
    {
      profesor: 'DR. HERIBERTO DE JESUS AGUILAR JUAREZ',
      numGpo: 3,
      horarios: [{
        start: new Time(13, 0),
        end: new Time(15, 0),
        day: daysEnum.VIE,
      },
      {
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
      profesor: 'MI. IVAN MONTES GONZALEZ',
      numGpo: 4,
      horarios: [{
        start: new Time(15, 0),
        end: new Time(17, 0),
        day: daysEnum.MAR,
      },
      {
        start: new Time(15, 0),
        end: new Time(17, 0),
        day: daysEnum.JUE,
      },
      {
        start: new Time(15, 0),
        end: new Time(17, 0),
        day: daysEnum.MIE,
      },
      ],
    },
    {
      profesor: 'DR. FELIPE ARTURO MACHUCA TZILI',
      numGpo: 5,
      horarios: [{
        start: new Time(17, 0),
        end: new Time(19, 0),
        day: daysEnum.MIE,
      },
      {
        start: new Time(17, 0),
        end: new Time(19, 0),
        day: daysEnum.MAR,
      },
      {
        start: new Time(17, 0),
        end: new Time(19, 0),
        day: daysEnum.JUE,
      },
      ],
    },
    {
      profesor: 'ING. BEATRIZ EUGENIA HERNANDEZ RODRIGUEZ',
      numGpo: 6,
      horarios: [{
        start: new Time(19, 0),
        end: new Time(21, 0),
        day: daysEnum.MIE,
      },
      {
        start: new Time(19, 0),
        end: new Time(21, 0),
        day: daysEnum.VIE,
      },
      {
        start: new Time(19, 0),
        end: new Time(21, 0),
        day: daysEnum.LUN,
      },
      ],
    },
    {
      profesor: 'DRA. MARIA BEATRIZ DE LA MORA MOJICA',
      numGpo: 1,
      horarios: [{
        start: new Time(7, 0),
        end: new Time(9, 0),
        day: daysEnum.VIE,
      },
      {
        start: new Time(7, 0),
        end: new Time(9, 0),
        day: daysEnum.LUN,
      },
      {
        start: new Time(7, 0),
        end: new Time(9, 0),
        day: daysEnum.MIE,
      },
      ],
    },
  ],
};

export default m1780;
