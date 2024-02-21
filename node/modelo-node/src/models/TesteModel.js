import { Schema, model } from "mongoose";

const TesteSchema = new Schema({
  title: { type: String, require: true },
  description: String,
});

const TesteModel = model("Teste", TesteSchema);

class Teste {}
