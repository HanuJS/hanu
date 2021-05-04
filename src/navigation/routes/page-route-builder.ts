import { PageRoute } from "./page-route";
import { RouteSettings } from "./route-settings";
export interface PageRouteBuilder {
  (settings: RouteSettings) : PageRoute;
}