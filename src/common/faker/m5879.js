import Time from '../time';
import daysEnum from '../days';

const m5879 = {
  clave: 5879,
  materia: 'LAB. TEORIA ELECTROMAGNETICA',
  grupos: [
    {
      profesor: 'ING. JOSE LUIS VILLEDAS MORALES',
      numGpo: 1,
      horarios: [{
        start: new Time(14, 0),
        end: new Time(16, 0),
        day: daysEnum.LUN,
      },
      ],
    },
    {
      profesor: 'M.I. EDGAR SENOBIO MOZO RAMOS',
      numGpo: 2,
      horarios: [{
        start: new Time(14, 0),
        end: new Time(16, 0),
        day: daysEnum.LUN,
      },
      ],
    },
    {
      profesor: 'M.I. ELIZABETH FONSECA CHAVEZ',
      numGpo: 3,
      horarios: [{
        start: new Time(16, 0),
        end: new Time(18, 0),
        day: daysEnum.LUN,
      },
      ],
    },
    {
      profesor: 'ING. JOSE LUIS VILLEDAS MORALES',
      numGpo: 4,
      horarios: [{
        start: new Time(18, 0),
        end: new Time(20, 0),
        day: daysEnum.LUN,
      },
      ],
    },
    {
      profesor: 'ING. ROGELIO TORRES CABRERA',
      numGpo: 5,
      horarios: [{
        start: new Time(11, 30),
        end: new Time(13, 30),
        day: daysEnum.MAR,
      },
      ],
    },
    {
      profesor: 'ING. SALVADOR TERRONES FONSECA',
      numGpo: 6,
      horarios: [{
        start: new Time(18, 0),
        end: new Time(20, 0),
        day: daysEnum.MAR,
      },
      ],
    },
    {
      profesor: 'ING. SALVADOR TERRONES FONSECA',
      numGpo: 7,
      horarios: [{
        start: new Time(20, 0),
        end: new Time(22, 0),
        day: daysEnum.MAR,
      },
      ],
    },
    {
      profesor: 'ING. ROGELIO TORRES CABRERA',
      numGpo: 8,
      horarios: [{
        start: new Time(7, 0),
        end: new Time(9, 0),
        day: daysEnum.MIE,
      },
      ],
    },
    {
      profesor: 'ING. JOSE LUIS VILLEDAS MORALES',
      numGpo: 9,
      horarios: [{
        start: new Time(14, 0),
        end: new Time(16, 0),
        day: daysEnum.MIE,
      },
      ],
    },
    {
      profesor: 'ING. ROGELIO TORRES CABRERA',
      numGpo: 10,
      horarios: [{
        start: new Time(9, 15),
        end: new Time(11, 15),
        day: daysEnum.VIE,
      },
      ],
    },
    {
      profesor: 'ING. ROGELIO TORRES CABRERA',
      numGpo: 11,
      horarios: [{
        start: new Time(11, 30),
        end: new Time(13, 30),
        day: daysEnum.VIE,
      },
      ],
    },
    {
      profesor: 'ING. ADRIANA S LOPEZ GARCIA',
      numGpo: 12,
      horarios: [{
        start: new Time(14, 0),
        end: new Time(16, 0),
        day: daysEnum.VIE,
      },
      ],
    },
    {
      profesor: 'ING. SALVADOR TERRONES FONSECA',
      numGpo: 13,
      horarios: [{
        start: new Time(9, 15),
        end: new Time(11, 15),
        day: daysEnum.SAB,
      },
      ],
    },
    {
      profesor: 'ING. SALVADOR TERRONES FONSECA',
      numGpo: 14,
      horarios: [{
        start: new Time(11, 15),
        end: new Time(13, 15),
        day: daysEnum.SAB,
      },
      ],
    },
  ],
};

export default m5879;
