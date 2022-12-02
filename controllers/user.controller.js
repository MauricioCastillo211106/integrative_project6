import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { getUser } from "../models/user.model.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = dotenv.config({
  path: path.resolve(__dirname, `../environments/.env.${process.env.NODE_ENV}`),
});

const user_view = async function (req, res) {
  getUser.User
    .findAll()
    .then((r) => {
      res.send(r);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const user_create = (req, res) => {
  getUser.User.create(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    },
    { fields: ["firstName", "lastName", "email", "password"] }
  )
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

const user_login = async (req, res) => {
  const user = await getUser.User.findOne({ where: { email: req.body.email } });

  if (user) {
    const validPassword = bcryptjs.compareSync(
      req.body.password,
      user.password
    );
    if (validPassword) {
      const token = jwt.sign(
        {
          sub: user.name,
          id: user.id,
        },
        "secret",
        { expiresIn: "30m" },
        data.parsed.JWT_TOKEN_SECRET,
        { algorithm: "HS256" }
      );

      user.token = token;

      res.header("auth-token", token).json({
        error: null,
      });
    } else {
      if (!validPassword)
        return res.status(400).json({ error: "contraseña no válida" });
    }
  } else {
    return res.status(400).json({ error: "Usuario no encontrado" });
  }
};
// const recovery_password = (req, res) => {
//   const token = uuidv4();
//   console.log(dataEnv.parsed.APYKEY);
//   sgMail.setApiKey(dataEnv.parsed.APYKEY);
//   const msg = {
//     to: req.body.email,
//     from: "ClienteServidorUP@outlook.es",
//     subject: "Recupera Contraseña",
//     text: "Recupera tu Contraseña",
//     html: `<ul><li><a href=http://localhost:3001/recovery-password?${token}> Recuperar</a></li></ul>`,
//   };
//   sgMail
//     .send(msg)
//     .then((response) => {
//       if (response[0].statusCode === 202) {
//         getUser.UserRecovery.create(
//           {
//             email: req.body.email,
//             token,
//           },
//           { fields: ["email", "token"] }
//         ).then((data) => {
//           res.send(data);
//         });
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };

// const user_update = (req, res) => {
//   let email = req.body.email;
//   let pass = req.body.password;
//   let password = bcryptjs.hashSync(pass);
//   console.log(password);
//   let newDatas = { email, password };
//   console.log(newDatas);
//   getUser.User.findOne({ where: { email: email } })

//     .then((r) => {
//       r.update(newDatas);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// };

//user.password = user.password && user.password != "" ? bcryptjs.hashSync(user.password, 10) : "";

export const userController = {
  user_view,
  user_login,
  user_create
};
