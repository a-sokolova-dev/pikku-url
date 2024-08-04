import { customAlphabet } from 'nanoid'

export const generateId = (): string => {
  let urlLength = Number(process.env.LINK_LENGTH) || 7

  // We want base62 charset for our short url
  let nanoid = customAlphabet(
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    urlLength
  )

  return nanoid(urlLength)
}

export const generateShortLink = (id: string): string => {
  return `${process.env.DEFAULT_DOMAIN}:${process.env.PORT}/${id}`
}
