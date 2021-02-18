import Time from '../time';
import daysEnum from '../days';

const m1858 = {
  clave: 1858,
  materia: 'FUNDAMENTOS DE SISTEMAS EMBEBIDOS',
  grupos: [
    {
      profesor: 'ING. LUIS ALEJANDRO DE LA CRUZ VELAZQUEZ',
      numGpo: 1,
      horarios: [{
        start: new Time(7, 0),
        end: new Time(8, 30),
        day: daysEnum.LUN,
      },
      {
        start: new Time(7, 0),
        end: new Time(8, 30),
        day: daysEnum.MIE,
      },
      {
        start: new Time(7, 0),
        end: new Time(9, 0),
        day: daysEnum.MAR,
      },
      ],
    },
    {
      profesor: 'M.C. JOSE MAURICIO MATAMOROS DE MARIA Y CAMPOS',
      numGpo: 2,
      horarios: [{
        start: new Time(13, 0),
        end: new Time(14, 30),
        day: daysEnum.LUN,
      },
      {
        start: new Time(13, 0),
        end: new Time(14, 30),
        day: daysEnum.MIE,
      },
      {
        start: new Time(13, 0),
        end: new Time(15, 0),
        day: daysEnum.MAR,
      },
      ],
    },
    {
      profesor: 'M.A. AYESHA SAGRARIO ROMAN GARCIA',
      numGpo: 3,
      horarios: [{
        start: new Time(19, 0),
        end: new Time(20, 30),
        day: daysEnum.MAR,
      },
      {
        start: new Time(19, 0),
        end: new Time(20, 30),
        day: daysEnum.JUE,
      },
      {
        start: new Time(18, 0),
        end: new Time(20, 0),
        day: daysEnum.VIE,
      },
      ],
    },
  ],
};

export default m1858;
