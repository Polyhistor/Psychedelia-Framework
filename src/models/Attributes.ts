export class Attributes<T> {
  constructor(private data: T) {}

  get = <k extends keyof T>(key: k): T[k] => {
    return this.data[key];
  };

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}
