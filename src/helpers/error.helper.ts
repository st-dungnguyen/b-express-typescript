export class BaseError extends Error {
  statusCode: number;
  internalMsg?: any;

  constructor(code: number, message: string, internalMsg?: any) {
    super(message);
    this.statusCode = code;
    this.internalMsg = internalMsg;
  }
}
