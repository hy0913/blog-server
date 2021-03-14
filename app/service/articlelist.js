"use strict";

const Service = require("egg").Service;

class ArticleListService extends Service {
  async queryArticleList() {
    const { ctx } = this;
    const data = [
      {
        id: 1,
        title: "文章标题标题1",
        content:
          "文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容",
      },
      {
        id: 2,
        title: "文章标题标题2",
        content:
          "2文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容",
      },
      {
        id: 3,
        title: "文章标题标题3",
        content:
          "3文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容",
      },
    ];
    return data;
  }

  async queryArticleContent() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    let data = {};
    // 查数据库操作
    switch (id) {
      case "1":
        data = { title: "111", content: "第1篇文章的内容" };
        break;
      case "2":
        data = { title: "222", content: "第2篇文章的内容" };
        break;
      case "3":
        data = { title: "333", content: "第3篇文章的内容" };
        break;

      default:
        data = {};
        break;
    }

    return data;
  }
}

module.exports = ArticleListService;
