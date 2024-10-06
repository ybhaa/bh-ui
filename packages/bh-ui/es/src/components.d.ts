import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    BButton: typeof components.Button;
    EaIcon: typeof components.Icon;
  }
}
export {};

