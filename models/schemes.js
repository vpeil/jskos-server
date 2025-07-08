import mongoose from "mongoose"
const Schema = mongoose.Schema

const terminologySchema = new Schema({
  _id: String,
}, {
  versionKey: false,
  strict: false,
  autoIndex: false,
})

export const Scheme = mongoose.model("Terminology", terminologySchema)
