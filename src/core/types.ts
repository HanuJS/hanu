export interface VoidCallback {
  (): void;
}

export interface PromiseVoidCallback<T> {
  (): Promise<T>;
}