import { getCurrentInstance as p, inject as N, ref as v, computed as V, unref as y } from "vue";
const $ = "b", l = "is-", c = (t, u, a, o, m) => {
  let r = `${t}-${u}`;
  return a && (r += `-${a}`), o && (r += `__${o}`), m && (r += `--${m}`), r;
}, B = Symbol("namespaceContextKey"), i = (t) => {
  const u = p() ? N(B, v($)) : v($);
  return V(() => y(u) || $);
}, P = (t, u) => {
  const a = i();
  return {
    namespace: a,
    b: (s = "") => c(a.value, t, s, "", ""),
    e: (s) => s ? c(a.value, t, "", s, "") : "",
    m: (s) => s ? c(a.value, t, "", "", s) : "",
    be: (s, e) => s && e ? c(a.value, t, s, e, "") : "",
    em: (s, e) => s && e ? c(a.value, t, "", s, e) : "",
    bm: (s, e) => s && e ? c(a.value, t, s, "", e) : "",
    bem: (s, e, n) => s && e && n ? c(a.value, t, s, e, n) : "",
    is: (s, ...e) => {
      const n = e.length >= 1 ? e[0] : !0;
      return s && n ? `${l}${s}` : "";
    },
    // css
    cssVar: (s) => {
      const e = {};
      for (const n in s)
        s[n] && (e[`--${a.value}-${n}`] = s[n]);
      return e;
    },
    cssVarName: (s) => `--${a.value}-${s}`,
    cssVarBlock: (s) => {
      const e = {};
      for (const n in s)
        s[n] && (e[`--${a.value}-${t}-${n}`] = s[n]);
      return e;
    },
    cssVarBlockName: (s) => `--${a.value}-${t}-${s}`
  };
};
export {
  $ as defaultNamespace,
  B as namespaceContextKey,
  i as useGetDerivedNamespace,
  P as useNamespace
};
