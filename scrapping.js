const puppeteer = require('puppeteer'); // For web scrapping
const fs = require('fs'); // For creating file

// Object to read user input
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// Second argument from CLI represents the KEY to search in the inputbox
// at the webpage
// const key = process.argv[2];

// Check if the key exist and if it is a number
// if (!key || isNaN(parseInt(key))) {
//   console.error('Please enter a numeric amount as an argument');
//   process.exit(1);
// }

/** ****************************************************************************
**********             Constants for the subject table                *********
***************************************************************************** */

const KEY = 0;
const NUMGPO = 1;
const PROFESOR = 2;

const TIPO1 = 3;
const HORAS1 = 4;
const DIAS1 = 5;

const SALON1 = -1;

const CUPO = 6;
// const VACANTES = -1;
const VACANTES = 7;

// const TIPO2 = 7;
// const HORAS2 = 8;
// const DIAS2 = 9;

const TIPO2 = -1;
const HORAS2 = 8;
const DIAS2 = 9;

// const SALON2 = -1;

/** ****************************************************************************
**********                   Scrapping main code                      *********
***************************************************************************** */

const scrapper = async (url, key) => {
  /**
   * This first 3 lines instantiate a headless broswer
   * With the URL argument
   */
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  /**
   * The page has an input box
   * We write the KEY declare above
   * And click in search button
   */
  await page.type('#clave', key);
  await page.click('#buscar');
  // Waiting for the NEW selectors with the result table
  await page.waitForSelector(`#resultado${key}`);

  const data = await page.evaluate((key) => {
    const [claveMateria, nombreMateria] = document.getElementById(key)
      .querySelector('div .col-10')
      .textContent.split('-');

    const groups = Array.from(document.querySelectorAll('table > tbody'))
      .map((el) => Array.from(el.querySelectorAll('tr > td')).map((ell) => ell.textContent));

    return {
      key: parseInt(claveMateria.trim(), 10),
      subject: nombreMateria.trim(),
      groups: groups.filter((gpo) => gpo.length !== 0),
    };
  }, key);

  await browser.close();
  return data;
};

/** ****************************************************************************
**********                   Processing rowdata                       *********
***************************************************************************** */

const processData = ({ key, subject, groups }) => {
  let grupos = [];

  groups.forEach((gpo) => {
    const grupo = {
      clave: parseInt(gpo[KEY]),
      numGpo: gpo[NUMGPO],
      profesor: gpo[PROFESOR],

      tipo1: gpo[TIPO1],
      horas1: gpo[HORAS1],
      dias1: gpo[DIAS1],
      salon1: gpo[SALON1],

      cupo: gpo[CUPO],
      vacantes: gpo[VACANTES],
    };

    if (gpo.length > 9) {
      if (gpo[TIPO2] === 'T' || gpo[TIPO2] === 'L') {
        grupo.tipo2 = gpo[TIPO2];
        grupo.horas2 = gpo[HORAS2];
        grupo.dias2 = gpo[DIAS2];
        // grupos.salon2 = gpo[10];
      } else {
        grupo.tipo2 = gpo[TIPO2];
        grupo.horas2 = gpo[HORAS2];
        grupo.dias2 = gpo[DIAS2];
      }
    }
    grupos.push(grupo);
  });

  // Taking just the groups that match with the given key
  grupos = grupos.filter((gpo) => gpo.clave === key);

  console.log(`Materia: ${subject}`);
  console.log(`Clave: ${key}`);
  console.log(grupos);

  const groupsWithSchedule = [];

  grupos.forEach((gpo) => {
    const horarios = [];
    let [start, end] = gpo.horas1.split('a').map((h) => h.trim());
    start = start.split(':');
    end = end.split(':');

    let days = gpo.dias1.split(',');
    days = days.map((d) => d.trim());

    days.forEach((d) => {
      horarios.push({
        day: d,
        start,
        end,
      });
    });

    // If hora2 and days2 exists then ...
    if (gpo.hasOwnProperty('horas2') && gpo.hasOwnProperty('dias2')) {
      let [start, end] = gpo.horas2.split('a').map((h) => h.trim());
      start = start.split(':');
      end = end.split(':');

      let days = gpo.dias2.split(',');
      days = days.map((d) => d.trim());

      days.forEach((d) => {
        horarios.push({
          day: d,
          start,
          end,
        });
      });
    }

    groupsWithSchedule.push({
      numGpo: parseInt(gpo.numGpo),
      profesor: gpo.profesor,
      // cupo: gpo.cupo,
      horarios,
    });
  });

  return {
    clave: key,
    materia: subject,
    grupos: groupsWithSchedule,
  };
};

const buildFile = (materia) => {
  let text = `import Time from '../time';
import daysEnum from '../days';

const m${materia.clave} = {
  clave: ${materia.clave},
  materia: '${materia.materia}',
  grupos: [`;

  materia.grupos.forEach((g) => {
    text += `
    {
      profesor: '${g.profesor}',
      numGpo: ${g.numGpo},
      horarios:[`;

    g.horarios.forEach((h) => {
      text += `{
          start: new Time(${parseInt(h.start[0], 10)}, ${parseInt(h.start[1])}),
          end: new Time(${parseInt(h.end[0], 10)}, ${parseInt(h.end[1], 10)}),
          day: daysEnum.${h.day.toUpperCase()},
        },
        `;
    });

    text += ']},';
  });

  text += `
    ],
};

export default m${materia.clave};`;

  // write JSON string to a file
  fs.writeFile(`src/common/faker/m${materia.clave}.js`, text, (err) => {
    if (err) {
      throw err;
    }
    console.log(`m${materia.clave}.js was created`);
  });
};

/** ****************************************************************************
**********                     Confirm dialog                         *********
***************************************************************************** */
/**
 * CURRENTLY NOT WORKING because asycn problems
 */
// const confirmDialog =  () => {
//   readline.question('Es correcto? (y/n)', opcion => {
//     readline.close();
//     if (opcion == 'n' ) {
//       process.exit(1);
//     }
//   });
// }

/** ****************************************************************************
**********                   Async call (main)                        *********
***************************************************************************** */

(async () => {
  const url = 'https://www.ssa.ingenieria.unam.mx/horarios.html';

  const mySubjectKeys = [
    /*
    1858, // Embebidos
    1867, // Arquitectura
    6867, // Lab. Arquitectura
    2930, // Criptografia
    2933, // Mineria datos
    2932, // Analisis de Textos
    2944, // Admin TIC
    1916, // Procesamiento img
    2931, // Negocios y web
    2950, // Proc lenguaje
    2952, // Proyecto de investig
    2958, // Temas III (CCNP)
    2957, // Temas II (Linux, Guerrero)
    958, // Temas selectos (BD)
    757, // Reconocimiento de patrones
    1592,
    879,
    6592,
    5879,
    558,
    5558,
    1997,
    6997,
    1999,
    6999,
    */
    1780,
  ];

  for (const key of mySubjectKeys) {
    console.log('============================================================');
    console.log(`Extracting data from:    ${key}`);
    console.log('============================================================');
    const rowdata = await scrapper(url, `${key}`);
    const subject = processData(rowdata);
    buildFile(subject);
  }
})();
