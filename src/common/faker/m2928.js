import Time from '../time';
import daysEnum from '../days';

const m2928 = {
  clave: 2928,
  materia: 'ADMINISTRACION DE PROYECTOS TIC',
  grupos: [
    {
      profesor: 'ING. JONATHAN GAMBOA BELTRAN',
      numGpo: 1,
      horarios: [
        {
          start: new Time(7, 0),
          end: new Time(9, 0),
          day: daysEnum.MAR,
        },
        {
          start: new Time(7, 0),
          end: new Time(9, 0),
          day: daysEnum.JUE,
        },
      ],
    },
  ],
};

export default m2928;
