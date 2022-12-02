import { Router } from "express";
import bodyParser from "body-parser";
import { dataController } from "../controllers/data.controller.js";

const router = Router();
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });


 router.get("/view", (req, res) => dataController.data_view(req, res));

router.post("/create", (req, res) => dataController.data_create(req, res));

router.put("/update", (req, res) => dataController.data_update(req, res));



export default router;
