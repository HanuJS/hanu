import { MultiChildRenderableElement } from "../../tree/renderable/multi-child-renderable-element";
import { Component } from "../component";
import { RenderableComponent } from "./renderable-component";

export abstract class MultiChildRenderableComponent extends RenderableComponent {
  constructor(children: Array<Component> = []) {
    super();
    assert(children !== null);
    if (children.indexOf(null) > -1) {
      throw new Error(
        `No null child should be provided for ${this.constructor.name}`
      );
    }
  }

  public createElement(): MultiChildRenderableElement {
    return new MultiChildRenderableElement(this);
  }

  private readonly _children: Array<Component>;
  public get children(): Array<Component> {
    return this._children;
  }
}
