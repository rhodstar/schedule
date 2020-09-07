'use strict';

const puppeteer = require('puppeteer');

const url = 'https://www.ssa.ingenieria.unam.mx/horarios.html';
// const claves = ['406', '1672'];
//TODO:- Fix for 1130, 1227
const clave = '406';

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

  console.log(data);

  await browser.close();
})();
