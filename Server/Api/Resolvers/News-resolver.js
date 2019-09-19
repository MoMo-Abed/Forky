import axios from "axios";
import cheerio from "cheerio";
import uniqid from "uniqid";

export default {
  news: async (_, { value }) => {
    try {
      const URL = getLinks(value);

      const Arr = [];

      await axios(URL).then(res => {
        const html = res.data;
        const $ = cheerio.load(html);
        const statsTable = $("#paging > div");

        /** */

        statsTable.each(function() {
          const image = $(this)
            .find("img")
            .attr("src");

          const desc = $(this)
            .find("p")
            .text();

          const title = $(this)
            .find("h3")
            .text();

          const Story = $(this)
            .find("a")
            .attr("href");

          const link = `https://www.youm7.com/${Story}`;
          const pubDate = $(this)
            .find("span")
            .text();

          const id = uniqid();

          Arr.push({
            title,
            link,
            desc,
            pubDate,
            image,
            id,
            isSelect: false
          });
        });
      });
      console.log("fetch Suc");
      return Arr;
    } catch (err) {
      throw err;
    }
  }
};
