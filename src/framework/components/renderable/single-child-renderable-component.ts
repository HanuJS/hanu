import { SingleChildRenderableElement } from "../../tree/renderable/single-child-renderable-element";
import { Component } from "../component";
import { RenderableComponent } from "./renderable-component";

export abstract class SingleChildRenderableComponent extends RenderableComponent {
  constructor(child: Component) {
    super();
    this._child = child;
  }

  public createElement(): SingleChildRenderableElement {
    return new SingleChildRenderableElement(this);
  }

  private readonly _child: Component;
  public get child(): Component {
    return this._child;
  }
}
