import { RenderManager } from "../../rendering/render-manager";
import { RenderableElement } from "./renderable-element";

export abstract class RootRenderableElement extends RenderableElement {
  public assignManager(renderManager: RenderManager): void {
    this._renderManager = renderManager;
  }
}
