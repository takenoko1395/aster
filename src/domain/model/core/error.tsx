export class AsterError extends Error {
  code: AsterErrorCode
  message: string

  constructor(code: AsterErrorCode, message: string) {
    super()
    this.code = code
    this.message = message
  }
}

export interface UnexpectedError extends AsterError {
  details: string[]
}

export enum AsterErrorCode {
  UNEXPECTED = 'UNEXPECTED',
  INVALID_ARGUMENT = 'INVALID_ARGUMENT',
  NOT_FOUND = 'NOT_FOUND',
  ALREADY_EXISTS = 'ALREADY_EXISTS',
}
