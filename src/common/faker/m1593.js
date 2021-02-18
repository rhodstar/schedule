import Time from '../time';
import daysEnum from '../days';

const m1593 = {
  clave: 1593,
  materia: 'ESTADISTICA PARA ING. ELEC. ELECTRONICA',
  grupos: [
    {
      profesor: 'M.C. ANA MARIA SALCEDO GARRIDO',
      numGpo: 1,
      horarios: [
        {
          start: new Time(7, 0),
          end: new Time(9, 0),
          day: daysEnum.LUN,
        },
      ],
    },
    {
      profesor: 'M.E. ALEJANDRO MORALES TREJO',
      numGpo: 2,
      horarios: [
        {
          start: new Time(19, 0),
          end: new Time(21, 0),
          day: daysEnum.MIE,
        },
      ],
    },
    {
      profesor: 'ING. GERARDO FLORES DELGADO',
      numGpo: 3,
      horarios: [
        {
          start: new Time(17, 0),
          end: new Time(19, 0),
          day: daysEnum.JUE,
        },
      ],
    },
    {
      profesor: 'ING. MARIANA ASTRID GONZALEZ PACHECO',
      numGpo: 4,
      horarios: [
        {
          start: new Time(9, 0),
          end: new Time(11, 0),
          day: daysEnum.VIE,
        },
      ],
    },
  ],
};

export default m1593;
