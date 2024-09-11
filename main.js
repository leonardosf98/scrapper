const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("https://www.mercadolivre.com.br/", {
    waitUntil: "networkidle0",
  });

  await page.waitForSelector(".poly-card");

  const produtos = await page.evaluate(() => {
    function formatarPreco(stringToFormat) {
      if (!stringToFormat) return "Preço não encontrado";

      stringToFormat = stringToFormat.split("\n").join("");

      const regex = /R\$\d+,\d{2}/g;
      const priceList = stringToFormat.match(regex);

      if (!priceList || priceList.length < 2) {
        return "Formato de preço inesperado";
      }

      let parcels = stringToFormat.replace(regex, "");

      return `${priceList[0]}\n${priceList[1]}\n${parcels.trim()}`;
    }
    return Array.from(document.querySelectorAll(".poly-card")).map(
      (produto) => {
        const nome = produto.querySelector(".poly-component__title").innerText;
        let preco = produto.querySelector(".poly-component__price").innerText;
        const link = produto.querySelector("a").href;
        preco = formatarPreco(preco);

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
