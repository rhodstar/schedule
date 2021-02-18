import Time from '../time';
import daysEnum from '../days';

const m2932 = {
  clave: 2932,
  materia: 'ANALISIS Y PROCESAMIENTO INTELIGENTE DE TEXTOS',
  grupos: [
    {
      numGpo: 1,
      profesor: 'M.P. OCTAVIO AUGUSTO SANCHEZ VELAZQUEZ',
      horarios: [
        {
          start: new Time(7, 0),
          end: new Time(11, 0),
          day: daysEnum.VIE,
        },
      ],
    },
  ],
};

export default m2932;
