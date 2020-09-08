import Time from '../time';
import daysEnum from '../days';

const m1624 = {
  clave: 1624,
  materia: 'ENERGIA E IMPACTO AMBIENTAL',
  grupos: [
    {
      profesor: 'ING. JOSE LUIS GARCIA URRESTI',
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
      profesor: 'M.I. HECTOR BELTRAN MORA',
      numGpo: 2,
      horarios: [
        {
          start: new Time(7, 0),
          end: new Time(11, 0),
          day: daysEnum.SAB,
        },
      ],
    },
    {
      profesor: 'M.I. VERONICA FLORES GARCIA',
      numGpo: 3,
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
      profesor: 'ING. JESUS ANTONIO SERRANO GARCIA',
      numGpo: 4,
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
    {
      profesor: 'DRA. MANUELA AZUCENA ESCOBEDO IZQUIERDO',
      numGpo: 5,
      horarios: [
        {
          start: new Time(11, 0),
          end: new Time(13, 0),
          day: daysEnum.MAR,
        },
        {
          start: new Time(11, 0),
          end: new Time(13, 0),
          day: daysEnum.JUE,
        },
      ],
    },
    {
      profesor: 'M.I. CLAUDIA CORREA SANTIAGO',
      numGpo: 6,
      horarios: [
        {
          start: new Time(18, 0),
          end: new Time(20, 0),
          day: daysEnum.MAR,
        },
        {
          start: new Time(18, 0),
          end: new Time(20, 0),
          day: daysEnum.JUE,
        },
      ],
    },
  ],
};

export default m1624;
