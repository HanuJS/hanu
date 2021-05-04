import { StatefulComponent } from "../framework/components/stateful-component";
import { RenderContext } from "../framework/rendering/render-context";
import { PageRoute } from "../navigation/routes/page-route";
import { PageRouteBuilder } from "../navigation/routes/page-route-builder";
import { RouteSettings } from "../navigation/routes/route-settings";

export interface PageRouteBuilderObject {
  [index: string]: PageRouteBuilder;
}

export class Application {
  private _root: string;
  private _routesBuilder: PageRouteBuilderObject;
  private _onUnknownRoute: PageRouteBuilder;
  private _initialRoute: string;
  private _currentRoute: PageRoute | null;
  get initialRoute(): string {
    return this._initialRoute;
  }
  constructor(
    root: string,
    routesBuilder: PageRouteBuilderObject,
    onUnknownRoute: PageRouteBuilder,
    initialRoute: string
  ) {
    this._root = root;
    this._routesBuilder = routesBuilder;
    this._onUnknownRoute = onUnknownRoute;
    this._initialRoute = initialRoute;
    this._currentRoute = null;
  }
  public processRoute(route: string) {
    let pageRouteBuilder: PageRouteBuilder;
    if (route in this._routesBuilder) {
      pageRouteBuilder = this._routesBuilder[route];
    } else {
      pageRouteBuilder = this._onUnknownRoute;
    }
    this._currentRoute = pageRouteBuilder(new RouteSettings());
    let root: HTMLElement = document.querySelector(`[hanu-app=${this._root}]`)
    if (root === null) {
      throw Error(`No element with css selector '[hanu-app=${this._root}]' exists`)
    }
  }
}
