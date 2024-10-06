import { defineComponent as s, computed as a, openBlock as l, createElementBlock as m, normalizeClass as c, renderSlot as u } from "vue";
import "./style/index.css";
import { useNamespace as p } from "../hooks/use-namespace/index.mjs";
const _ = /* @__PURE__ */ s({
  name: "b-button",
  __name: "button",
  props: {
    type: {},
    size: {},
    plain: {},
    round: {},
    disabled: {},
    circle: {},
    loading: { type: Boolean },
    icon: {}
  },
  setup(o) {
    const e = o, t = p("button"), n = a(() => [
      t.b(),
      t.m(e.type),
      t.m(e.size),
      t.m(e.plain),
      t.m(e.round),
      t.m(e.circle),
      t.m(e.disabled)
    ]);
    return (r, i) => (l(), m("button", {
      class: c(["b-button", n.value])
    }, [
      u(r.$slots, "default")
    ], 2));
  }
});
export {
  _ as default
};
