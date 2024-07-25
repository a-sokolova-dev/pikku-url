import { Router } from "express";

import links from "./links";

const router = Router();

router.use("/links", links);

export default router;
