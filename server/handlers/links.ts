import { Handler } from "express";

import Url from "../models/Url";
import { generateId, generateShortLink } from "../utils";
import { CreateLinkReq } from "./types";

export const create: Handler = async (req: CreateLinkReq, res) => {
  const { longUrl } = req.body;

  const urlId = generateId();
  const shortUrl = generateShortLink(urlId);

  try {
    // Check if the long / short url pair already exists in our db
    let url = await Url.findOne({
      longUrl,
    });

    if (url) return res.json({ shortUrl: url.shortUrl });

    url = new Url({
      longUrl,
      shortUrl,
      date: new Date(),
    });

    await url.save();
    return res.status(201).json({ shortUrl });
  } catch (err) {
    return res.status(500).json("Server Error");
  }
};
