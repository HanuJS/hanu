import { Component } from "../base/component"
import { StatelessComponent } from "../base/stateless-component"

export class Container extends StatelessComponent {
  constructor(
    klass: string | string[] | null = null,
    style: { [key: string]: any } | null = null,
    attrs: { [key: string]: any } | null = null,
    children: Component[] | null = null,
  ) {
    super('div', klass, style, attrs, children)
  }
}
