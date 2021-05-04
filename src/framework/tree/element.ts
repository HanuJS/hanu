import { Component } from "../components/component";
import { RenderManager } from "../rendering/render-manager";
import { RenderObject } from "../rendering/render-object";
import { RenderContext } from "../rendering/render-context";

enum ElementLifeCycle {
  Initial = "Initial",
  Active = "Active",
  Inactive = "Inactive",
  Deleted = "Deleted",
}

export abstract class Element implements RenderContext {
  constructor(component: Component) {
    assert(component !== null);
    this._component = component;
  }

  public mount(parent: Element): void {
    // TODO: handle other tree building and linking measures
    assert(this._lifeCycle === ElementLifeCycle.Initial);
    assert(this.component !== null);
    assert(this._parent === null);
    assert(parent === null || parent._lifeCycle === ElementLifeCycle.Active);
    this._parent = parent;
    this._renderManager = parent._renderManager;
    this._lifeCycle = ElementLifeCycle.Active;
  }

  public deactivate(): void {
    // TODO: handle other tree building and linking measures
    assert(this._lifeCycle === ElementLifeCycle.Active);
    assert(this._component !== null);
    this._lifeCycle = ElementLifeCycle.Inactive;
  }

  public unmount(): void {
    // TODO: handle other tree building and linking measures
    assert(this._lifeCycle === ElementLifeCycle.Inactive);
    assert(this._component !== null);
    this._lifeCycle = ElementLifeCycle.Deleted;
  }

  public markNeedsBuild(): void {
    // TODO: handle other tree building and linking measures
    assert(this._lifeCycle !== ElementLifeCycle.Deleted);
    assert(this._lifeCycle === ElementLifeCycle.Active);
    // TODO: check if this did not happen (through setState)
    // during a build phase when it should not happen
    if (this.dirty) {
      return;
    }
    this._dirty = true;
    // TODO: schedule build with build owner
  }

  public get renderObject(): RenderObject {
    // TODO: look into subtree to find a RendereableElement and return its renderObject property
    return null;
  }

  protected _component: Component;
  public get component(): Component {
    return this._component;
  }

  protected _renderManager: RenderManager;
  public get renderManager(): RenderManager {
    return this._renderManager;
  }

  private _dirty: boolean = true;
  public get dirty(): boolean {
    return this._dirty;
  }

  private _lifeCycle: ElementLifeCycle = ElementLifeCycle.Initial;

  private _parent: Element = null;
}
