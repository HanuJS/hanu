import { StatefulComponent } from "./framework/components/stateful-component";
import { StatelessComponent } from "./framework/components/stateless-component";
import { Container } from "./library/container";
import { NotImplemented } from "./core/exceptions/not-implemented";

export {};

declare global {
  interface Window {
    Hanu: any;
  }
}

(function (ns) {
  ns.core = {
    exceptions: {
      NotImplemented: NotImplemented,
    },
  };
  ns.components = {
    StatelessComponent: StatelessComponent,
    StatefulComponent: StatefulComponent,
    Container: Container,
  };
})((window.Hanu = window.Hanu || {}));
