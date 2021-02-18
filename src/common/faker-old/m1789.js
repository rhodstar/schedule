import Time from '../time';
import daysEnum from '../days';

const m1789 = {
  clave: 1789,
  materia: 'CIENCIA TECNOLOGIA Y SOCIEDAD',
  grupos: [
    {
      profesor: 'M.I. HUGO GERMAN SERRANO MIRANDA',
      numGpo: 3,
      horarios: [
        {
          start: new Time(11, 0),
          end: new Time(13, 0),
          day: daysEnum.MIE,
        },
      ],
    },
    {
      profesor: 'DRA. HERIBERTA CASTAÑOS RODRIGUEZ',
      numGpo: 4,
      horarios: [
        {
          start: new Time(11, 0),
          end: new Time(13, 0),
          day: daysEnum.MIE,
        },
      ],
    },
    {
      profesor: 'MA. VICTOR DAMIAN PINILLA MORAN',
      numGpo: 5,
      horarios: [
        {
          start: new Time(11, 0),
          end: new Time(13, 0),
          day: daysEnum.VIE,
        },
      ],
    },
    {
      profesor: 'MTRA ANA LUISA SELENE ALVAREZ CARRILLO',
      numGpo: 6,
      horarios: [
        {
          start: new Time(11, 0),
          end: new Time(13, 0),
          day: daysEnum.LUN,
        },
      ],
    },
    {
      profesor: 'M.I. PEDRO ALCANTARA AGUILAR',
      numGpo: 7,
      horarios: [
        {
          start: new Time(13, 0),
          end: new Time(15, 0),
          day: daysEnum.MIE,
        },
      ],
    },
    {
      profesor: 'DRA. OLINCA SUAREZ MEJIA',
      numGpo: 9,
      horarios: [
        {
          start: new Time(15, 0),
          end: new Time(17, 0),
          day: daysEnum.MAR,
        },
      ],
    },
    {
      profesor: 'M.I. CARLOS HERNANDEZ ESPINOSA',
      numGpo: 10,
      horarios: [
        {
          start: new Time(15, 0),
          end: new Time(17, 0),
          day: daysEnum.MIE,
        },
      ],
    },
    {
      profesor: 'DRA: OLGA MARIA DEL CARMEN MUCHARRAZ GONZALEZ',
      numGpo: 1,
      horarios: [
        {
          start: new Time(7, 0),
          end: new Time(9, 0),
          day: daysEnum.VIE,
        },
      ],
    },
    {
      profesor: 'ING. CAROLINA GARRIDO MORELOS',
      numGpo: 2,
      horarios: [
        {
          start: new Time(9, 0),
          end: new Time(11, 0),
          day: daysEnum.LUN,
        },
      ],
    },
    {
      profesor: 'DRA: OLGA MARIA DEL CARMEN MUCHARRAZ GONZALEZ',
      numGpo: 8,
      horarios: [
        {
          start: new Time(13, 0),
          end: new Time(15, 0),
          day: daysEnum.VIE,
        },
      ],
    },
    {
      profesor: 'DRA NYDIA GUADALUPE LARA ZAVALA',
      numGpo: 11,
      horarios: [
        {
          start: new Time(17, 0),
          end: new Time(19, 0),
          day: daysEnum.MIE,
        },
      ],
    },
  ],
};

export default m1789;
