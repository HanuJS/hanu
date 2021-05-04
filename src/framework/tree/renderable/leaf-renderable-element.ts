import { LeafRenderableComponent } from "../../components/renderable/leaf-renderable-component";
import { RenderableElement } from "./renderable-element";

export class LeafRenderableElement extends RenderableElement {
  constructor(component: LeafRenderableComponent) {
    super(component);
  }
}
