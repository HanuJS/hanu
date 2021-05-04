import { Component } from "../components/component";
import { State, StateLifeCycle } from "../components/state";
import { StatefulComponent } from "../components/stateful-component";
import { ComponentElement } from "./component-element";

export class StatefulElement extends ComponentElement {
  constructor(component: StatefulComponent) {
    super(component);
    this._state = component.createState();
    if(!(this._state instanceof State)) {
      throw new Error('createState did not return an instance of State');
    }
    assert(this._state.element === null);
    this._state.element = this;
    if(this._state.component !== null) {
      throw new Error('createState returned old state with an active component');
    }
    this._state.component = component;
    assert(this._state.lifeCycle === StateLifeCycle.Created);
  }

  public build(): Component {
    return this._state.build(this);
  }

  public unmount(): void {
    super.unmount();
    this._state.destroy();
    if(this._state.lifeCycle !== StateLifeCycle.Deleted) {
      throw new Error('State was not disposed properly');
    }
    this._state.element = null;
    this._state = null;
  }

  private _state: State<StatefulComponent>;
}