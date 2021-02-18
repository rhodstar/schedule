import Time from '../time';
import daysEnum from '../days';

const m2944 = {
  clave: 2944,
  materia: 'ADMINISTRACION DE CENTROS DE TECNOLOGIA DE INFORMACION',
  grupos: [
    {
      profesor: 'M.I. ANGEL CESAR GOVANTES SALDIVAR',
      numGpo: 1,
      horarios: [{
        start: new Time(11, 30),
        end: new Time(13, 30),
        day: daysEnum.LUN,
      },
      {
        start: new Time(11, 30),
        end: new Time(13, 30),
        day: daysEnum.MIE,
      },
      ],
    },
  ],
};

export default m2944;
