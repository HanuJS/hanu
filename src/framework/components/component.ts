import { Element } from "../tree/element";

export abstract class Component {
  public abstract createElement(): Element;
}
