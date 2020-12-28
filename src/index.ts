import { StatefulComponent } from "./components/base/stateful-component";
import { StatelessComponent } from "./components/base/stateless-component";
import { Container } from "./components/hanu/container";
import { NotImplemented } from "./core/exceptions/not-implemented";

export {}

declare global {
  interface Window { Hanu: any; }
}

(function (ns) {
  ns.core = {
    exceptions: {
      NotImplemented: NotImplemented
    }
  }
  ns.components = {
    StatelessComponent: StatelessComponent,
    StatefulComponent: StatefulComponent,
    Container: Container,
  }
}(window.Hanu = window.Hanu || {}));
