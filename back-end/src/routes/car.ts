import { Router } from "express";

import * as carController from "../controllers/carController";

const router = Router();

router.get("/", carController.findAll);

router.get("/:id", carController.findById);

router.post("/", carController.create);

router.put("/:id", carController.update);

router.delete("/:id", carController.remove);

export default router;