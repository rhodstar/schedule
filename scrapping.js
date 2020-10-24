const puppeteer = require('puppeteer');
/**
 * fs is for writing data into a file
 */
const fs = require('fs');

const url = 'https://www.ssa.ingenieria.unam.mx/horarios.html';

/**
 * Catching the console argument
 */
const clave = process.argv[2];

if (!clave || isNaN(parseInt(clave))) {
  console.error('Please enter a numeric amount as an argument');
  process.exit(1);
}

/**
 * self-invoke function syntaxis:
 * (function(){
 *    //body
 * })();
 * As the js engine reads the self-invoke function it is execute
 * If needed check:
 * https://developer.mozilla.org/en-US/docs/Glossary/IIFE
 */
(async () => {
  /**
   * Use commented line for debuggin purposes,
   * it actives the browser in a non headless mode, this help us see the 
   * algorithm workflow
   */
  // const browser = await puppeteer.launch({ headless: false, slowMo: 200 });
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  /**
   * Writing the 'clave' into the input field
   * and clicking in search button
   */
  await page.type('#clave', clave);
  await page.click('#buscar');

  /**
   * Remember, almost everything is asynchronous
   * So in this case, #resultado${clave} selector doesnt exist and 
   * we wait for it
   */
  await page.waitForSelector(`#resultado${clave}`);
  /**
   * CAREFULL: page.evaluate has two params
   *    - callback to get the data
   *    - the callback argument, in this case 'clave'
   */
  const data = await page.evaluate((clave) => {
    /**
     * After the selector renders we start collecting the information
     */
    const title = document.getElementById(clave).querySelector('div .col-10')
      .textContent;
    const grupos = Array.from(
      document.querySelectorAll('table > tbody'),
    ).map((el) => Array.from(el.querySelectorAll('tr > td')).map((ell) => ell.textContent));

    const [claveMateria, nombreMateria] = title.split('-');

    return {
      clave: parseInt(claveMateria.trim(), 10),
      materia: nombreMateria.trim(),
      grupos: grupos.filter((gpo) => gpo.length !== 0),
    };
  }, clave);

  let grupos = [];

  data.grupos.forEach((gpo) => {
    const grupo = {
      clave: parseInt(gpo[0]),
      numGpo: gpo[1],
      profesor: gpo[2],
      tipo1: gpo[3],
      horas1: gpo[4],
      dias1: gpo[5],
      salon1: gpo[6],
      cupo: gpo[7],
      vacantes1: gpo[8],
    };

    if (gpo.length > 9) {
      if (gpo[8] === 'T' || gpo[8] === 'L') {
        grupo.tipo2 = gpo[8];
        grupo.horas2 = gpo[8];
        grupo.dias2 = gpo[910];
        // grupos.salon2 = gpo[10];
      } else {
        grupo.tipo2 = gpo[3];
        grupo.horas2 = gpo[8];
        grupo.dias2 = gpo[9];
      }
    }
    grupos.push(grupo);
  });

  grupos = grupos.filter((gpo) => gpo.clave === data.clave);

  /**
   * Uncomment the following to print the results before writing to a file
   * The reason is because the result table changes in show columns
   */
  // console.log(grupos);
  // process.exit(1);

  /**
   * Please before running all the code, verify the correctness of the data
   * obtained above
   * If everything is correct we process the data (the starting and ending 
   * hours get split )
   */
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

  /**
   * Final build object for a subject
   */
  const materia = {
    clave: data.clave,
    materia: data.materia,
    grupos: groupsWithSchedule,
  };

  /**
   * In the future we shall write to a database
   * 
   * ***********************************************************************
   *        Starts building text string for writing into a file
   * ***********************************************************************
   */
  let textBuilder = `import Time from '../time';
import daysEnum from '../days';

const m${materia.clave} = {
  clave: ${materia.clave},
  materia: '${materia.materia}',
  grupos: [`;

  materia.grupos.forEach((g) => {
    textBuilder += `
    {
      profesor: '${g.profesor}',
      numGpo: ${g.numGpo},
      horarios:[`;

    g.horarios.forEach((h) => {
      textBuilder += `{
          start: new Time(${parseInt(h.start[0], 10)}, ${parseInt(h.start[1])}),
          end: new Time(${parseInt(h.end[0], 10)}, ${parseInt(h.end[1], 10)}),
          day: daysEnum.${h.day.toUpperCase()},
        },
        `;
    });

    textBuilder += ']},';
  });

  textBuilder += `
    ],
};

export default m${materia.clave};`;

  /**
   * ***********************************************************************
   *        ENDS building text string for writing into a file
   * ***********************************************************************
   */

  // write text string to a file
  fs.writeFile(`src/common/faker/m${materia.clave}.js`, textBuilder, (err) => {
    if (err) {
      throw err;
    }
    console.log(`m${materia.clave}.js was created`);
  });

  await browser.close();
})();
