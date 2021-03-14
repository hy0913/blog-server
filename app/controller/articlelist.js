"use strict";

const Controller = require("egg").Controller;

class ArticleListController extends Controller {
  async queryArticleList() {
    const { ctx } = this;
    try {
      ctx.body = {
        code: 200,
        data: await ctx.service.articlelist.queryArticleList(),
        success: true,
        message: "",
      };
    } catch (error) {
      ctx.body = {
        code: -1,
        success: false,
        message: "接口出错",
      };
    }
  }

  async queryArticleContent() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    console.log('ctx.request.body==============',ctx.request.body)
    if(!id){
        ctx.body = {
            code: -1,
            success: false,
            message: "参数不完整",
        };
    }else{
        ctx.body = {
            code: 200,
            data: await ctx.service.articlelist.queryArticleContent(),
            success: true,
            message: "",
          };
    }
  }
}

module.exports = ArticleListController;
