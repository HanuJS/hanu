import { StatelessElement } from "../tree/stateless-element";
import { RenderContext } from "../rendering/render-context";
import { Component } from "./component";

export abstract class StatelessComponent extends Component {
  public abstract createElement(): StatelessElement;
  public abstract build(renderContext: RenderContext): Component;
}
