import { StatefulElement } from "../tree/stateful-element";
import { Component } from "./component";
import { State } from "./state";

export abstract class StatefulComponent extends Component {
  public abstract createElement(): StatefulElement;
  public abstract createState(): State<StatefulComponent>;
}
