import { RenderableElement } from "../../tree/renderable/renderable-element";
import { RenderContext } from "../../rendering/render-context";
import { RenderObject } from "../../rendering/render-object";
import { Component } from "../component";

export abstract class RenderableComponent extends Component {
  public abstract createElement(): RenderableElement;
  public abstract createRenderObject(
    renderContext: RenderContext
  ): RenderObject;
}
