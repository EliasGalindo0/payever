export default class ErrorHandler extends Error {
  constructor(message: string) {
    super(message);
    this.message = message;
  }
}
