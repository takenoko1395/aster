interface Error {
  code: string
  message: string
}

export interface UnexpectedError extends Error {
  details: string[]
}
