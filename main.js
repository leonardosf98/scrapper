const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("https://www.mercadolivre.com.br/", {
    waitUntil: "networkidle0",
  });

  await page.waitForSelector(".poly-card");

  const produtos = await page.evaluate(() => {
    return Array.from(document.querySelectorAll(".poly-card")).map(
      (produto) => {
        const nome = produto.querySelector(".poly-component__title").innerText;
        let preco = produto.querySelector(".poly-component__price").innerText;
        const link = produto.querySelector("a").href;
        preco = preco.split("\n").join("");

        return { nome, preco, link };
      }
    );
  });

  produtos.map((item) => {
    console.log(item.nome);
    console.log(item.preco);
    console.log(item.link);
  });

  await browser.close();
})();
