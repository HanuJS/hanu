import { Component } from "../base/component"
import { HanuElement } from "../../core/elements/hanu-element"
import { StatelessComponent } from "../base/stateless-component"

export class Container extends StatelessComponent {
  private _child: Component | null
  constructor(
    klass: string | string[] | null = null,
    style: { [key: string]: any } | null = null,
    attrs: { [key: string]: any } | null = null,
    child: Component | null = null,
  ) {
    super()
    this._element = new HanuElement('div', klass, style, attrs)
    this._child = child
  }
}
