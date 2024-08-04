import type { Handler } from "express";

import Url from "../models/Url.js";
import { generateId, generateShortLink } from "../utils/index.js";
import type { CreateLinkReq } from "./types";

export const create: Handler = async (req: CreateLinkReq, res) => {
  let { longUrl } = req.body;

  let urlId = generateId();
  let shortUrl = generateShortLink(urlId);

  try {
    // Check if the long / short url pair already exists in our db
    let url = await Url.findOne({
      longUrl
    });

    if (url) return res.json({ shortUrl: url.shortUrl });

    url = new Url({
      date: new Date(),
      longUrl,
      shortUrl
    });

    await url.save();
    return res.status(201).json({ shortUrl });
  } catch (err) {
    return res.status(500).json("Server Error");
  }
};
