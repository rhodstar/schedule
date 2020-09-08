'use strict';

const puppeteer = require('puppeteer');

const url = 'https://www.ssa.ingenieria.unam.mx/horarios.html';
// const claves = ['406', '1672'];
//TODO:- Fix for 1130, 1227
const clave = '1227';

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
      // salon1: gpo[7]
    };

    if (gpo.length > 7) {
      grupo.tipo2 = gpo[7];
      grupo.horas2 = gpo[8];
      grupo.dias2 = gpo[9];
      // grupos.salon2 = gpo[10];
    }
    grupos.push(grupo);
  });

  grupos = grupos.filter((gpo) => gpo.clave === data.clave);

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

  await browser.close();
})();
