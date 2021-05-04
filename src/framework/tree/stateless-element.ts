import { Component } from "../components/component";
import { StatelessComponent } from "../components/stateless-component";
import { ComponentElement } from "./component-element";

export class StatelessElement extends ComponentElement {
  constructor(component: StatelessComponent) {
    super(component);
  }

  public build(): Component {
    return this.component.build(this);
  }

  public get component(): StatelessComponent {
    return this._component as StatelessComponent;
  }
}