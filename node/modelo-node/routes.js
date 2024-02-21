import { Router } from "express";
import { index } from "./src/controllers/indexController.js";
import { indexLogin, registerLogin } from "./src/controllers/loginController.js";

const routes = Router();

routes.get('/',index)

//login

routes.get('/login/index',indexLogin)
routes.post('/login/register',registerLogin)

export default routes;
