import { HanuElement } from "../../core/elements/hanu-element"

export abstract class Component {
  protected _element: HanuElement
  constructor() {
  }
  public build(): HanuElement {
    return this._element
  }
}