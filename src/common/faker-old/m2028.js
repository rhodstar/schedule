import Time from '../time';
import daysEnum from '../days';

const m2028 = {
  clave: 2028,
  materia: 'SISMOLOGIA APLlCADA A LA GEOTECNIA',
  grupos: [
    {
      profesor: 'DR. ANTONIO URIBE CARVAJAL',
      numGpo: 1,
      horarios: [
        {
          start: new Time(7, 0),
          end: new Time(9, 0),
          day: daysEnum.MIE,
        },
        {
          start: new Time(7, 0),
          end: new Time(9, 0),
          day: daysEnum.LUN,
        },
      ],
    },
  ],
};

export default m2028;
