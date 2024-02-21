import { Schema, model } from "mongoose";
import validator from "validator";

const LoginSchema = new Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
});

const LoginModel = model("Login", LoginSchema);

export class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  async register() {
    this.validate();
    if (this.errors.length > 0) {
      return;
    }
    try {
      this.user = await LoginModel.create(this.body);
    } catch (error) {
      console.log(error);
    }
  }

  validate() {
    this.cleanUP();
    if (!validator.isEmail(this.body.email)) {
      this.errors.push("E-mail invalido");
    }
    if (this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push("Senha deve ter entre 3 e 50 caracteres");
    }
  }

  cleanUP() {
    for (let key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = "";
      }
    }

    this.body = {
      email: this.body.email,
      password: this.body.password,
    };
  }
}
