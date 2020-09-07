const puppeteer = require('puppeteer');

const url = 'https://www.ssa.ingenieria.unam.mx/horarios.html';
// const claves = ['406', '1672'];
const clave = '406';

(async () => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 200 });
  const page = await browser.newPage();
  await page.goto(await url, { waitUntil: 'networkidle2' });

  await page.type('#clave', await clave);
  await page.click('#buscar');

  // document.getElementById('406').querySelector('div .col-10').textContent
  await page.waitForSelector(`#resultado${clave}`);
  const data = await page.evaluate(() => {
    const title = document.getElementById('406').querySelector('div .col-10')
      .textContent;
    const gpos = Array.from(
      document.querySelectorAll('table > tbody'),
    ).map((el) =>
      Array.from(el.querySelectorAll('tr > td')).map((ell) => ell.innerHTML),
    );
    return {
      title,
      gpos,
    };
  });
  console.log(data);
  await page.screenshot({ path: `${await clave}.png` });

  await browser.close();
})();
