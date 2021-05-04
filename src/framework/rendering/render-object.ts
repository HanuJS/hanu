enum RenderObjectState {
  Created = "Created",
  Associated = "Associated",
  Deleted = "Deleted",
}

export class RenderObject {
  constructor(
    tag: string,
    klass: string | string[] | null = null,
    style: { [key: string]: any } | null = null,
    attrs: { [key: string]: any } | null = null
  ) {
    this._tag = tag;
    this._class = klass;
    this._style = style;
    delete attrs?.class;
    this._attrs = attrs;
    this._state = RenderObjectState.Created;
    this._htmlElement = null;
  }

  public html(): string {
    return `<${
      this._tag
    }${this._classHtml()}${this._styleHtml()}${this._attrsHtml()}></${
      this._tag
    }>`;
  }

  private _htmlElement: HTMLElement | null;
  public get htmlElement(): HTMLElement {
    if (document.body.contains(this._htmlElement)) {
      return this._htmlElement;
    } else {
      this._state = RenderObjectState.Deleted;
      throw new Error(
        `Associated HTMLElement does not exist in DOM for RenderElement [${this.html()}]`
      );
    }
  }
  public set htmlElement(v: HTMLElement) {
    if (!document.body.contains(this._htmlElement)) {
      throw new Error(
        `Attempt to associate a dead HTMLElement to RenderElement`
      );
    }
    if (this._state != RenderObjectState.Created) {
      throw new Error(
        `Attempt to associate an HTMLElement to a RenderElement not in ${this._state} state`
      );
    }
    this._htmlElement = v;
    this._state = RenderObjectState.Associated;
  }

  private readonly _tag: string;
  get tag(): string {
    return this._tag;
  }

  private readonly _class: string | string[] | null;
  get klass(): string | string[] | null {
    return this._class;
  }

  private readonly _style: { [key: string]: any } | null;
  get style(): { [key: string]: any } | null {
    return this._style;
  }

  private readonly _attrs: { [key: string]: any } | null;
  get attrs(): { [key: string]: any } | null {
    return this._attrs;
  }

  private _state: RenderObjectState;

  private _classHtml(): string {
    if (typeof this._class === "string") {
      return ` class=${this._class}`;
    } else if (this._class !== null) {
      return ` class="${Array.prototype.join.call(this._class, " ")}"`;
    }
    return "";
  }

  private _styleHtml(): string {
    if (this._style !== null) {
      let properties = Object.keys(this._style).map((key) => {
        return `${key}:${this._style[key]}`;
      });
      return ` style="${properties.join(";")}"`;
    }
    return "";
  }

  private _attrsHtml(): string {
    if (this._attrs !== null) {
      let attrs = Object.keys(this._attrs).map((key) => {
        return `${key}="${this._attrs[key]}"`;
      });
      return ` ${attrs.join(" ")}`;
    }
    return "";
  }
}
