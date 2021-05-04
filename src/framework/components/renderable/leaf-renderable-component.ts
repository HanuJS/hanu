import { LeafRenderableElement } from "../../tree/renderable/leaf-renderable-element";
import { RenderableComponent } from "./renderable-component";

export abstract class LeafRenderableComponent extends RenderableComponent {
  public createElement(): LeafRenderableElement {
    return new LeafRenderableElement(this);
  }
}
