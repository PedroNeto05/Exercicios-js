import { Login } from "../models/LoginModel.js";

export function indexLogin(req, res) {
  res.render("login");
}
export async function registerLogin(req, res) {
  try {
    const login = new Login(req.body);
    await login.register();

    if (login.errors.length > 0) {
      req.flash("errors", login.errors);
      req.session.save(() => {
        return res.redirect("back");
      });
      return;
    }

    req.flash("success", 'Seu usuário foi criado com sucesso');
      req.session.save(() => {
        return res.redirect("back");
      });
      return;
    return res.send(login.errors);
  } catch (e) {
    return res.render('404')
  }
}
