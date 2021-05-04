import { ComponentBuilder } from "../../framework/components/component-builder";
import { RenderContext } from "../../framework/rendering/render-context";
import { Route } from "./route";
import { RouteSettings } from "./route-settings";

export class PageRoute implements Route {
  constructor(builder: ComponentBuilder, settings: RouteSettings) {
    this._builder = builder;
    this._settings = settings;
  }

  private readonly _builder: ComponentBuilder;
  public get builder(): ComponentBuilder {
    return this._builder;
  }

  private readonly _settings: RouteSettings;
  public get settings(): RouteSettings {
    return this._settings;
  }
}
