import type { Request } from "express";

export interface CreateLinkReq extends Request {
  body: {
    longUrl: string;
  };
}
