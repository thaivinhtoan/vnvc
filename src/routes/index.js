const meRouter = require("./me");
const tiemsRouter = require("./tiems");
const siteRouter = require("./site");

function route(app) {
  app.use("/me", meRouter);
  app.use("/tiems", tiemsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
