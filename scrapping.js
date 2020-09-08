const puppeteer = require('puppeteer');
const fs = require('fs');

const url = 'https://www.ssa.ingenieria.unam.mx/horarios.html';

const clave = process.argv[2];

if (!clave || isNaN(parseInt(clave))) {
  console.error('Please enter a numeric amount as an argument');
  process.exit(1);
}

(async () => {
  // FOR DEBUGGING
  // const browser = await puppeteer.launch({ headless: false, slowMo: 200 });
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  await page.type('#clave', clave);
  await page.click('#buscar');

  await page.waitForSelector(`#resultado${clave}`);
  const data = await page.evaluate((clave) => {
    const title = document.getElementById(clave).querySelector('div .col-10')
      .textContent;
    const grupos = Array.from(
      document.querySelectorAll('table > tbody'),
    ).map((el) =>
      Array.from(el.querySelectorAll('tr > td')).map((ell) => ell.textContent),
    );

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
      cupo: gpo[6],
      vacantes: gpo[7],
      // salon1: gpo[7]
    };

    if (gpo.length > 8) {
      if (gpo[7] === 'T' || gpo === 'L') {
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

  // console.log(grupos);
  // process.exit(1);

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

  const materia = {
    clave: data.clave,
    materia: data.materia,
    grupos: groupsWithSchedule,
  };

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

  await browser.close();
})();
