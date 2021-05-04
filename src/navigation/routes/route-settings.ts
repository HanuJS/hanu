export class RouteSettings {
  constructor(argument?: any) {
    this._argument = argument;
  }

  private _argument: any;
  public get argument(): any {
    return this._argument;
  }
}
