'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/article/list/get', controller.articlelist.queryArticleList);
  router.post('/article/id', controller.articlelist.queryArticleContent);
};
