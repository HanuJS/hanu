import { NotImplemented } from "../../core/exceptions/not-implemented"

export abstract class Component {
  constructor() {
  }
  public build(): string {
    throw new NotImplemented()
  }
}