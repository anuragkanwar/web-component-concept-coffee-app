export class ObserverModule {
  private events: { [key: string]: Function[] };

  constructor() {
    this.events = {};
  }

  subscribe(event: string, callback: Function) {
    if (!this.events.hasOwnProperty(event)) {
      this.events[event] = [];
    }
    return this.events[event].push(callback);
  }

  publish(event: string, data: any = {}) {
    if (!this.events.hasOwnProperty(event)) {
      return [];
    }
    return this.events[event].map(callback => callback(data));
  }
}