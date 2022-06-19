const Tiem = require("../models/Tiem");
const { mutipleMongooseToObject } = require("../../util/mongoose");

class MeController {
  // [GET] /me/stored/tiems
  storedTiems(req, res, next) {
    Promise.all([Tiem.find({}), Tiem.countDocumentsDeleted()])
      .then(([tiems, deletedCount]) =>
        res.render("me/stored-tiems", {
          deletedCount,
          tiems: mutipleMongooseToObject(tiems),
        })
      )
      .catch(next);
  }

  // [GET] /me/trash/tiems
  trashTiems(req, res, next) {
    Tiem.findDeleted({})
      .then((courses) =>
        res.render("me/trash-courses", {
          courses: mutipleMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
