export default class ResponseError {
  constructor(info = null, hasErrors = false, errors = [], httpCode = null) {
    this.info = info;
    this.hasErrors = hasErrors;
    this.errors = errors; // array of messages
    this.httpCode = httpCode;
  }
}
