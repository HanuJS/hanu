import { Application } from "./application";

export function runApplication(application: Application): void {
  window.console.log('Running the application');
  application.processRoute(application.initialRoute);
}