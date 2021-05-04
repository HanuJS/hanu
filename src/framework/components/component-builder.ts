import { RenderContext } from "../rendering/render-context";
import { Component } from "./component";

export interface ComponentBuilder {
  (context: RenderContext): Component;
}
