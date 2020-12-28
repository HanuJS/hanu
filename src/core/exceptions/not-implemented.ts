export class NotImplemented extends Error {
  private _message : string;
  public get message() : string {
    return this._message;
  }
  public set message(v : string) {
    this._message = v;
  }
  constructor(message: string = 'Not Implemented') {
    super()
    this._message = message
  }
}