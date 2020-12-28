import { StatelessComponent } from "./stateless-component";

export abstract class HtmlElementComponent extends StatelessComponent {
  protected readonly _class: string | string[] | null;
  protected readonly _style: { [key: string]: any } | null;
  protected readonly _attrs: { [key: string]: any } | null;
  get klass(): string | string[] | null {
    return this._class;
  }
  get style(): { [key: string]: any } | null {
    return this._style;
  }
  get attrs(): { [key: string]: any } | null {
    return this._attrs;
  }
  constructor(
    klass: string | string[] | null = null,
    style: { [key: string]: any } | null = null,
    attrs: { [key: string]: any } | null = null
  ) {
    super();
    this._class = klass;
    this._style = style;
    this._attrs = attrs;
  }
  protected buildTag(tag: string): string {
    return `<${tag}${this._buildClass()}${this._buildStyle()}${this._buildAttrs()}>`;
  }
  private _buildClass(): string {
    if (typeof this._class === "string") {
      return ` class=${this._class}`;
    } else if (this._class !== null) {
      return ` class=${Array.prototype.join.call(this._class, " ")}`;
    }
    return "";
  }
  private _buildStyle(): string {
    if (this._style !== null) {
      let properties = Object.keys(this._style).map((key) => {
        return `${key}:${this._style[key]}`;
      });
      return ` style="${properties.join(";")}"`;
    }
    return "";
  }
  private _buildAttrs(): string {
    if (this._attrs !== null) {
      let attrs = Object.keys(this._attrs).map((key) => {
        return `${key}=${this._attrs[key]}`;
      });
      return ` ${attrs.join(" ")}`;
    }
    return "";
  }
}
