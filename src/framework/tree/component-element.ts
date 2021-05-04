import { Component } from "../components/component";
import { Element } from "./element";

export abstract class ComponentElement extends Element {
  constructor(component: Component) {
    super(component);
  }

  public mount(parent: Element): void {
    super.mount(parent);
    // TODO: build to create the child element
  }

  public abstract build(): Component;

  private _child: Element = null;
}