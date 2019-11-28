import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, K> {
  moodels: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deseralize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        this.moodels.push(this.deseralize(value));
      });

      this.trigger("change");
    });
  }
}
