const Tiem = require("../models/Tiem");
const { mongooseToObject } = require("../../util/mongoose");

class TiemController {
  //[GET] /tiems/:slug
  show(req, res, next) {
    Tiem.findOne({ slug: req.params.slug })
      .then((tiem) =>
        res.render("tiems/show", {
          tiem: mongooseToObject(tiem),
        })
      )
      .catch(next);
  }

  // [GET] /tiems/create
  create(req, res, next) {
    res.render("tiems/create");
  }

  // [GET] /tiems/createSuccess
  createSuccess(req, res, next) {
    res.render("tiems/createSuccess");
  }

  // [POST] /tiems/store
  store(req, res, next) {
    const course = new Tiem(req.body);
    course
      .save()
      .then(() => res.redirect("/tiems/createSuccess"))
      .catch((error) => {});
  }

  // [GET] /tiems/:id/edit
  edit(req, res, next) {
    Tiem.findById(req.params.id)
      .then((tiem) =>
        res.render("tiems/edit", {
          tiem: mongooseToObject(tiem),
        })
      )
      .catch(next);
  }

  // [PUT] /tiems/:id
  update(req, res, next) {
    Tiem.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/tiems"))
      .catch(next);
  }

  // [DELETE] /tiems/:id
  destroy(req, res, next) {
    Tiem.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [DELETE] /tiems/:id/force
  forceDestroy(req, res, next) {
    Tiem.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }

  // [PATCH] /tiems/:id/restore
  restore(req, res, next) {
    Tiem.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}

module.exports = new TiemController();
