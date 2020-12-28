import { Component } from "./component"

export abstract class StatefulComponent extends Component {
  constructor(
    tag: string,
    klass: string | string[] | null = null,
    style: { [key: string]: any } | null = null,
    attrs: { [key: string]: any } | null = null,
    children: Component[] | null = null,
  ) {
    super(tag, klass, style, attrs, children)
  }
}