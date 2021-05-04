import { RenderableComponent } from "../../components/renderable/renderable-component";
import { RenderObject } from "../../rendering/render-object";
import { Element } from "../element";

export abstract class RenderableElement extends Element {
  constructor(component: RenderableComponent) {
    super(component);
  }

  public mount(parent: Element): void {
    super.mount(parent);
    this._renderObject = this.component.createRenderObject(this);
    // TODO: attach render object to tree
  }

  private _renderObject: RenderObject;
  public get renderObject(): RenderObject {
    return this._renderObject;
  }

  public get component(): RenderableComponent {
    return this._component as RenderableComponent;
  }
}
