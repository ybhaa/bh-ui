import * as t from "./src/index.mjs";
import { Button as i } from "./src/b-button/index.mjs";
import { Input as s } from "./src/b-input/index.mjs";
const r = {
  install: (o) => {
    for (let e in t)
      o.use(t[e]);
  }
};
export {
  i as Button,
  s as Input,
  r as default
};
