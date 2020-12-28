import { HtmlElementComponent } from "../base/html-element-component"

export class Container extends HtmlElementComponent  {
  private _child: HtmlElementComponent | null
  constructor(
    klass: string | string[] | null = null,
    style: { [key: string]: any } | null = null,
    attrs: { [key: string]: any } | null = null,
    child: HtmlElementComponent | null = null,
  ) {
    super(klass, style, attrs)
    this._child = child
  }
  public build(): string {
    return `${this.buildTag('div')}${this._child?.build()}</div>`
  }
}