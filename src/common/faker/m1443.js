import Time from '../time';
import daysEnum from '../days';

const m1443 = {
  clave: 1443,
  materia: 'ANALISIS DE SISTEMAS Y SEÑALES',
  grupos: [
    {
      profesor: 'M.I. JOSE ANTONIO DE JESUS ARREDONDO GARZA',
      numGpo: 1,
      horarios: [
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
    {
      profesor: 'ING. ABEL VILLANUEVA PEÑA',
      numGpo: 2,
      horarios: [
        {
          start: new Time(16, 0),
          end: new Time(18, 0),
          day: daysEnum.LUN,
        },
        {
          start: new Time(16, 0),
          end: new Time(18, 0),
          day: daysEnum.MIE,
        },
      ],
    },
    {
      profesor: 'ING. MARIA DEL ROSARIO VAZQUEZ FUENTES',
      numGpo: 3,
      horarios: [
        {
          start: new Time(9, 30),
          end: new Time(11, 30),
          day: daysEnum.MAR,
        },
        {
          start: new Time(9, 30),
          end: new Time(11, 30),
          day: daysEnum.JUE,
        },
      ],
    },
    {
      profesor: 'ING. MARIA DEL ROSARIO VAZQUEZ FUENTES',
      numGpo: 4,
      horarios: [
        {
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
      profesor: 'DR. RAFAEL IRIARTE VIVAR-BALDERRAMA (* Ver "Nota de Inglés")',
      numGpo: 5,
      horarios: [
        {
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

export default m1443;
