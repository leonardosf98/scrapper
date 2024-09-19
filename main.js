const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("https://www.mercadolivre.com.br/ofertas", {
    waitUntil: "networkidle0",
  });

  await page.waitForSelector(".poly-card__content");

  const produtos = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".poly-card__content")).map(
      (produto) => {
        const nome = produto.querySelector(".poly-component__title").innerText;
        let preco = `R$${
          produto.querySelector(".andes-money-amount__fraction").innerText
        }`;
        const link = produto.querySelector(".poly-component__title").href;

        return { nome, preco, link };
      }
    );
  });

  produtos.map((item) => {
    console.log(item.nome);
    console.log(item.preco);
    console.log(item.link);
    console.log("\n");
  });

  await browser.close();
})();
