import type { ShortLinkCreateRequest, ShortLinkCreateResponse } from "./types";

export const shortenLink = async ({
  longUrl,
}: ShortLinkCreateRequest): Promise<ShortLinkCreateResponse> => {
  let url = "/links/create";
  let params = {
    body: JSON.stringify({ longUrl }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  };

  return fetch(url, params)
    .then((r) => {
      return r.json();
    })
    // eslint-disable-next-line no-console
    .catch(console.error);
};
