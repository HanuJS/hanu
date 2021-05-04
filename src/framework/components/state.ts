import { VoidCallback } from "../../core/types";
import { StatefulElement } from "../tree/stateful-element";
import { RenderContext } from "../rendering/render-context";
import { Component } from "./component";
import { StatefulComponent } from "./stateful-component";

export enum StateLifeCycle {
  Created = "Created",
  Initialized = "Initialized",
  Ready = "Ready",
  Deleted = "Deleted",
}

export abstract class State<T extends StatefulComponent> {
  protected init(): void {
    if (this._lifeCycle !== StateLifeCycle.Created) {
      throw new Error(`initState called when the state is ${this._lifeCycle}`);
    }
  }

  public destroy(): void {
    assert(this._lifeCycle === StateLifeCycle.Ready);
    this._lifeCycle = StateLifeCycle.Deleted;
  }

  protected setState(callback: VoidCallback): void {
    assert(callback != null);
    assert(
      (() => {
        if (this._lifeCycle === StateLifeCycle.Deleted) {
          throw new Error(`setState called after destroy on ${this}`);
        }
        if (this._lifeCycle === StateLifeCycle.Created && !this.mounted) {
          throw new Error(`setState called before mounting ${this}`);
        }
        return true;
      })()
    );
    let result: any = callback();
    assert(
      (() => {
        if (result instanceof Promise) {
          throw new Error(
            `setState on ${this} called with a callback returning a Promise`
          );
        }
        return true;
      })()
    );
    this._element.markNeedsBuild();
  }

  public abstract build(renderContext: RenderContext): Component;

  private _component: T;
  public get component(): T {
    return this._component;
  }
  public set component(v: T) {
    this._component = v;
  }

  private _element: StatefulElement;
  public get element(): StatefulElement {
    return this._element;
  }
  public set element(v: StatefulElement) {
    this._element = v;
  }

  private _lifeCycle: StateLifeCycle = StateLifeCycle.Created;
  public get lifeCycle(): StateLifeCycle {
    return this._lifeCycle;
  }
  public set lifeCycle(v: StateLifeCycle) {
    this._lifeCycle = v;
  }

  public get mounted(): boolean {
    return this._element != null;
  }
}
