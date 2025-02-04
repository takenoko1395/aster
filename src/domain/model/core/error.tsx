export class AsterError extends Error {
  code: string
  message: string

  constructor(code: string, message: string) {
    super()
    this.code = code
    this.message = message
  }
}

export interface UnexpectedError extends AsterError {
  details: string[]
}
