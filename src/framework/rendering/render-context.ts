import { Component } from "../components/component";
import { RenderObject } from "./render-object";
import { RenderManager } from "./render-manager";

export abstract class RenderContext {
  public abstract get component(): Component;
  public abstract get renderManager(): RenderManager;
  public abstract get renderObject(): RenderObject;
}
