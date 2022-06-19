const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;

const Tiem = new Schema(
  {
    hoten: { type: String, required: true },
    ngaysinh: { type: Date, required: true },
    gioitinh: { type: String, required: true },
    tinh: { type: String, required: true },
    quan: { type: String, required: true },
    xa: { type: String, required: true },
    dc: { type: String, required: true },
    hotenlienhe: { type: String, required: true },
    moiquanhe: { type: String, required: true },
    sdt: { type: String, required: true },
    loaivacxin: { type: String, required: true },
    trungtam: { type: String, required: true },
    ngaytiem: { type: Date, required: true },
    slug: { type: String, slug: "hoten", unique: true },
  },
  {
    timestamps: true,
  }
);

// Add plugins
mongoose.plugin(slug);
Tiem.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

module.exports = mongoose.model("Tiem", Tiem);
