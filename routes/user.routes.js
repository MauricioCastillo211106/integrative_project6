import { Router } from "express";
import bodyParser from "body-parser";
import { userController } from "../controllers/user.controller.js";

const router = Router();

const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: false });

/**
 * @openapi
 * '/api/user/create':
 *  post:
 *     tags:
 *     - User
 *     summary: Crea usuario
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              -firstName
 *              - lastName
 *              - email
 *              - password
 *            properties:
 *              firstName:
 *                type: string
 *                default: Mauricio David
 *              lastName:
 *                type: string
 *                default: Castillo Ruvalcaba
 *              email:
 *                type: string
 *                default: maurix.cas.ruv11@gmail.com
 *              password:
 *                type: string
 *                default: prueba141189@
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

/**
 * @openapi
 * '/api/user/update':
 *  put:
 *     tags:
 *     - User
 *     summary: actualizar contraseña
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: prueba@gmail.com
 *              password:
 *                type: string
 *                default: prueba141189@
 *     responses:
 *      200:
 *        description: update
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

/**
 * @openapi
 * '/api/user/login':
 *  post:
 *     tags:
 *     - User
 *     summary: Login
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: prueba@gmail.com
 *              password:
 *                type: string
 *                default: prueba141189@
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

/**
 * @openapi
 * '/api/user/recovery_password':
 *  post:
 *     tags:
 *     - User
 *     summary: Recupera contraseña
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *            properties:
 *              email:
 *                type: string
 *                default: 211106@ids.upchiapas.edu.mx
 *     responses:
 *      200:
 *        description: Create
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */

/**
 * @openapi
 * '/api/user/view':
 *  get:
 *     tags:
 *     - User
 *     summary: visualizar usuarios
 *     responses:
 *      200:
 *        description: view
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 */
 router.get("/view", (req, res) => userController.user_view(req, res));

router.post("/create", (req, res) => userController.user_create(req, res));

router.post("/login", (req, res) => userController.user_login(req, res));



export default router;
