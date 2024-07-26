import { Router } from "express";

import Url from "../models/Url";
import { generateShortLink } from "../utils";
import links from "./links";

const router = Router();

router.use("/links", links);

router.get("/:id", async (req, res) => {
  try {
    const shortUrl = generateShortLink(req.params.id);
    const url = await Url.findOne({ shortUrl });
    if (url) {
      return res.redirect(url.longUrl);
    } else res.status(404).json("Not found");
  } catch (err) {
    res.status(500).json("Server Error");
  }
});

export default router;
